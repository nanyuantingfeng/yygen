/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 12:31.
 **************************************************/

const path = require('path')
const compose = require('koa-compose')

function rq(typeName) {
  return require('../templates/' + typeName + '/sh')
}

module.exports = async function(config) {
  if (typeof config.types === 'string') {
    config.types = config.types
      .split(/[,\s]/)
      .map(n => n.trim())
      .filter(n => !!n)
  }

  if (config.types.indexOf('common') === -1) {
    config.types.unshift('common')
  }

  const { types, name, output } = config

  const cwd = process.cwd()

  const pOut = output ? path.join(cwd, output, name || '.') : path.join(cwd, name || '.')

  const ctx = {
    output: pOut,
    config: config,
    filesObject: {},
    files: []
  }

  await compose(types.map(type => rq(type)))(ctx)

  return ctx
}
