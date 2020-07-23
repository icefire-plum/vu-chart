// 创建自定义组件脚本

const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const uppercamelize = require('uppercamelcase')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green( `${message}` ))
const successLog = message => console.log(chalk.blue( `${message}` ))
const errorLog = error => console.log(chalk.red( `${error}` ))
const {
    mdDocs,
    chartCoreTemplate,
    chartOptionTemplate,
    chartEntryTemplate
} = require('./template')

const generateFile = (path, data) => {
    if (fs.existsSync(path)) {

        errorLog( `${path}文件已存在` )
        return

    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })

    })
}


// 这里生成图表类型文件夹
log('请输入要生成的图表类型和图表名称, 形如 bar:base-bar 或者pie: basePie')
process.stdin.on('data', async chunk => {
    let input = String(chunk).trim().toString()
    // 拆分输入得到类型名称和图表名称
    const inputArr = input.split(':')
    let inputFileName = inputArr[0]
    let chartName = inputArr[1]
    // 输入名称格式 test-test--> TestTest
    inputFileName = uppercamelize(inputFileName)
    chartName = uppercamelize(chartName)
    // 类型
    const fileDirectory = resolve('../packages', inputFileName)
    const hasChartFile = fs.existsSync(fileDirectory)
    if (inputFileName && chartName) {
        // 组件类型
        if (!hasChartFile) {
            log(`${inputFileName}类型不存在，将生成${inputFileName}类型`)
            await dotExistDirectoryCreate(fileDirectory)
            log(`${inputFileName}类型已生成`)
        } else {
            log(`${inputFileName}类型已存在`)
        }
        // 图表
        const chartDirectory = resolve(`../packages/${inputFileName}`, chartName)
        const chartCore = resolve(chartDirectory, `${chartName}.js`)
        const chartOptin= resolve(chartDirectory, `option.js`)
        const chartEntry= resolve(chartDirectory, `index.js`)
        const hasChart = fs.existsSync(chartDirectory)
        if (!hasChart) {
            log(`${chartName}图表不存在,将生成${chartName}图表目录`)
            await dotExistDirectoryCreate(chartDirectory)
        } else {
            log(`${chartName}图表目录已存在,请重新输入图表:`)
            return
        }
        // 生成模板

        try {
            log( `生成 图表核心 文件 ${chartName}.js` )
            await generateFile(chartCore, chartCoreTemplate(chartName))
            log( `生成 图表默认配置 文件 option.js` )
            await generateFile(chartOptin, chartOptionTemplate())
            log( `生成 图表入口 文件 index.js` )
            await generateFile(chartEntry, chartEntryTemplate(chartName))
            successLog('生成 图表 成功')
        } catch (e) {
            errorLog(e.message)
        } 
    } else {
        errorLog( `请重新输入组件类型:` )
        return
    }
    // 这里生成自定义组件说明文档
    const docsDirectory = resolve('../examples/docs')
    const docsMdName = resolve(docsDirectory, `${chartName}.md` )

    try {
        log( `生成 图表 文档 ${docsMdName}` )
        await generateFile(docsMdName, mdDocs(chartName))
        successLog('生成 图表 文档成功')

    } catch (e) {

        errorLog(e.message)

    }
    process.stdin.emit('end')
})


// 这里生成自定义图表组件
// log('请输入要生成的组件名称, 形如 demo 或者 demo-test')
// let componentName = ''
// process.stdin.on('data', async chunk => {
//     let inputName = String(chunk).trim().toString()
//     inputName = uppercamelize(inputName)
//     const componentDirectory = resolve('../packages', inputName)
//     const componentVueName = resolve(componentDirectory, `${inputName}.vue` )
//     const entryComponentName = resolve(componentDirectory, 'index.js')

//     const hasComponentDirectory = fs.existsSync(componentDirectory)
//     if (inputName) {

//         // 这里生成组件
//         if (hasComponentDirectory) {
//             errorLog( `${inputName}组件目录已存在，请重新输入` )
//             return
//         } else {
//             log( `生成 component 目录 ${componentDirectory}` )
//             await dotExistDirectoryCreate(componentDirectory)
//         }
//         try {
//             if (inputName.includes('/')) {
//                 const inputArr = inputName.split('/')
//                 componentName = inputArr[inputArr.length - 1]
//             } else {
//                 componentName = inputName
//             }
//             log( `生成 vue 文件 ${componentVueName}` )
//             await generateFile(componentVueName, vueTemplate(componentName))
//             log( `生成 entry 文件 ${entryComponentName}` )
//             await generateFile(entryComponentName, entryTemplate(componentName))
//             successLog('生成 component 成功')
//         } catch (e) {
//             errorLog(e.message)
//         }

//     } else {

//         errorLog( `请重新输入组件名称:` )
//         return

//     }

//     // 这里生成自定义组件说明文档
//     const docsDirectory = resolve('../examples/docs')
//     const docsMdName = resolve(docsDirectory, `${inputName}.md` )

//     try {
//         log( `生成 component 文档 ${docsMdName}` )
//         await generateFile(docsMdName, mdDocs( `${inputName} 组件`, componentName ))
//         successLog('生成 component 文档成功')

//     } catch (e) {

//         errorLog(e.message)

//     }

//     process.stdin.emit('end')
// })

process.stdin.on('end', () => {
    log('exit')
    process.exit()
})

function dotExistDirectoryCreate(directory) {
    return new Promise((resolve) => {

        mkdirs(directory, function() {
            resolve(true)
        })

    })
}

// 递归创建目录
function mkdirs(directory, callback) {
    var exists = fs.existsSync(directory)
    if (exists) {

        callback()

    } else {

        mkdirs(path.dirname(directory), function() {
            fs.mkdirSync(directory)
            callback()
        })

    }
}