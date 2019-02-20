/**************************************************
 * Created by nanyuantingfeng on 2018/10/22 11:35.
 **************************************************/
const path = require('path')
const mergedeep = require('merge-deep')

module.exports = async function(ctx, next) {
  const { filesObject, files } = ctx
  const pkg = require('./package.json')
  filesObject['package.json'] = mergedeep(filesObject['package.json'], pkg)
  files.push(path.join(__dirname, 'jest.config.js'))
  files.push(path.join(__dirname, 'jest.setup.js'))
  next()
}
