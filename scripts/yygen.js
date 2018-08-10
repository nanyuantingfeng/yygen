/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 11:14.
 **************************************************/
const path = require('path')
const fse = require('fs-extra')
const build = require('./build')

module.exports = async function(config) {
  const ctx = await build(config)
  const { filesObject, files, output } = ctx

  await fse.mkdirp(output)

  files.forEach(file => {
    fse.copyFileSync(file, output + '/' + path.basename(file))
  })

  const fileNames = Object.keys(filesObject)

  fileNames.forEach(fileName => {
    fse.outputJSONSync(output + '/' + fileName, filesObject[fileName], { spaces: 2 })
  })
}
