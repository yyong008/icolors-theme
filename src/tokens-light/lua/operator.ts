import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const operatorScopes: RawAtomTheme[] = [
  {
    name: 'lua::operator',
    scope: [],
    rawScope: ['keyword.operator'],
    foreground: colors.magentaColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(operatorScopes, luaTypes)
