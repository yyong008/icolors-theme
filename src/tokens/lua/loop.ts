import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
