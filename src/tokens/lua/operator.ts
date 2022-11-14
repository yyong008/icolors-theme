import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
