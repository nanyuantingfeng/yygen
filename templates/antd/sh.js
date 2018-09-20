/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 10:59.
 **************************************************/
const path = require('path')

module.exports = async function(ctx, next) {
  const { files } = ctx
  files.push(path.join(__dirname, '.babelrc.raw'))
  next()
}
