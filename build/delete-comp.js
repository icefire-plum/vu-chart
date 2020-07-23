// 删除自定义组件脚本

const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const uppercamelize = require('uppercamelcase')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green( `${message}` ))
const successLog = message => console.log(chalk.blue( `${message}` ))
const errorLog = error => console.log(chalk.red( `${error}` ))

log('请输入要删除的图表类型和图表名称, 形如 bar:base-bar 或者pie: basePie')
process.stdin.on('data', async chunk => {
    let input = String(chunk).trim().toString()
    // 拆分输入得到类型名称和图表名称
    const inputArr = input.split(':')
    let inputFileName = inputArr[0]
    let chartName = inputArr[1]
    // 输入名称格式 test-test--> TestTest
    inputFileName = uppercamelize(inputFileName)
    chartName = uppercamelize(chartName)
    const fileDirectory = resolve('../packages', inputFileName)
    const chartDirectory = resolve(`../packages/${inputFileName}`, chartName)

    const hasChartDirectory = fs.existsSync(chartDirectory)

    const docsDirectory = resolve('../examples/docs')
    const docsMdName = resolve(docsDirectory, `${chartName}.md` )
    if (inputFileName && chartName) {

        if (hasChartDirectory) {
            log( `删除 图表 目录 ${chartDirectory}` )
            await removePromise(chartDirectory)
            successLog( `已删除 ${chartName} 图表目录` )
            try {
                fs.rmdirSync(fileDirectory)
                successLog(`${inputFileName}已经变成空文件夹，一并被删除`)
            } catch (error) {
                
            }
            log( `删除 图表 文档 ${docsMdName}` )
            fs.unlink(docsMdName)
            successLog( `已删除 ${chartName} 组件说明文档` )
        } else {
            errorLog( `${chartName}组件目录不存在` )
            return
        }

    } else {

        errorLog( `请重新输入组件名称:` )
        return

    }

    process.stdin.emit('end')
})

process.stdin.on('end', () => {
    log('exit')
    process.exit()
})

function removePromise(dir) {
    return new Promise(function(resolve, reject) {

        // 先读文件夹
        fs.stat(dir, function(_err, stat) {
            if (stat.isDirectory()) {
                fs.readdir(dir, function(_err, files) {
                    files = files.map(file => path.join(dir, file)) // a/b  a/m
                    files = files.map(file => removePromise(file)) // 这时候变成了promise
                    Promise.all(files).then(function() {
                        fs.rmdir(dir, resolve)
                    })
                })
            } else {
                fs.unlink(dir, resolve)
            }
        })

    })
}