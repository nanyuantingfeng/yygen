/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 12:39.
 **************************************************/

const yygen = require('../scripts/yygen')

describe('yygen', () => {
  const table = [
    {
      types: [],
      name: 'demo-common',
      output: './demo'
    },

    {
      types: ['ts'],
      name: 'demo-ts',
      output: './demo'
    },

    {
      types: ['ts', 'ekuaibao'],
      name: 'demo-ts-ekuaibao',
      output: './demo'
    },

    {
      types: ['ts', 'ekuaibao', 'lint'],
      name: 'demo-ts-ekuaibao-lint',
      output: './demo'
    },

    {
      types: ['ts', 'ekuaibao', 'lint', 'jest'],
      name: 'demo-ts-ekuaibao-lint-jest',
      output: './demo'
    },

    {
      types: ['ts', 'ekuaibao', 'jest'],
      name: 'demo-ts-ekuaibao-jest',
      output: './demo'
    },

    {
      types: ['ts', 'jest'],
      name: 'demo-ts-jest',
      output: './demo'
    }
  ]

  describe.each(table)('.each(%j)', config => {
    test(`show be types: ${config.types.join(',')}`, async () => {
      await yygen(config)
    })
  })
})
