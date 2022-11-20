import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const loopScopes: RawAtomTheme[] = [
  {
    name: 'lua::loop',
    scope: [],
    rawScope: ['keyword.control.loop', 'keyword.operator.expression.of'],
    foreground: colors.purpleColors400,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(loopScopes, luaTypes)
