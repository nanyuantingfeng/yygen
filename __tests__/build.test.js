/**************************************************
 * Created by nanyuantingfeng on 2018/8/10 11:59.
 **************************************************/
const build = require('../scripts/build')

describe('build', () => {
  const table = [
    { types: ['ts'], name: 'demo-demo-0', output: './demo' },
    {
      types: ['ts', 'ekuaibao'],
      name: 'demo-demo-1',
      output: './demo'
    },
    {
      types: ['ts', 'ekuaibao', 'lint'],
      name: 'demo-demo-2',
      output: './demo'
    },
    {
      types: ['ts', 'ekuaibao', 'lint', 'jest'],
      name: 'demo-demo-3',
      output: './demo'
    },
    {
      types: ['ekuaibao', 'lint', 'jest'],
      name: 'demo-demo-4',
      output: './demo'
    }
  ]

  describe.each(table)('.each(%j)', config => {
    test(`show be types: ${config.types.join(',')}`, async () => {
      const ctx = await build(config)
      expect(ctx).toMatchSnapshot()
    })
  })
})
