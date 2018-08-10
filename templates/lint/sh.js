/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 10:59.
 **************************************************/
const fse = require('fs-extra')
const path = require('path')
const mergedeep = require('merge-deep')

module.exports = async function(ctx, next) {
  const { filesObject, files } = ctx
  const pkg = require('./package.json')
  filesObject['package.json'] = mergedeep(filesObject['package.json'], pkg)

  files.push(path.join(__dirname, 'tslint.json'))
  next()
}
