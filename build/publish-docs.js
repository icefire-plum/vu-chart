#!/usr/bin/env node
const execSync = require('child_process').execSync
const VERSION = require('../package.json').version
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')
// const CURRENT_BRANCH = execSync('git symbolic-ref --short -q HEAD').toString().replace(/\n/, '')
// const PUB_BRANCH = 'publish-docs'
// execSync(`git checkout ${PUB_BRANCH}`)
// execSync(`git merge develop --allow-unrelated-histories `)
// execSync('npm run build:docs')
// execSync(`git add . && git commit -m \"[deploy] ${GIT_COMMIT} - [release] ${VERSION}\"`)
// execSync('git subtree push --prefix dist github gh-pages')
// execSync(`git checkout ${CURRENT_BRANCH}`)

const ghpages = require('gh-pages')
execSync('npm run build:docs')
console.info('文件准备完成')
ghpages.publish('dist', function(err){
  console.info(err)
  console.info('文档发布完成')
});