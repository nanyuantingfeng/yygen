/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 10:59.
 **************************************************/
const fse = require('fs-extra')
const path = require('path')

module.exports = async function(ctx, next) {
  const { name, output, type } = ctx.config
  const { filesObject, files } = ctx
  const pkg = require('./package.json')
  pkg['name'] = name
  filesObject['package.json'] = pkg

  files.push(path.join(__dirname, '.gitignore.raw'))
  files.push(path.join(__dirname, '.npmignore.raw'))

  files.push(path.join(__dirname, '.prettierrc'))
  files.push(path.join(__dirname, 'README.md'))
  files.push(path.join(__dirname, 'LICENSE'))
  next()
}
