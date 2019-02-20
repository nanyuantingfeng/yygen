/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 10:59.
 **************************************************/
const mergedeep = require('merge-deep')

module.exports = async function(ctx, next) {
  const { filesObject } = ctx
  const pkg = require('./package.json')
  filesObject['package.json'] = mergedeep(filesObject['package.json'], pkg)
  next()
}
