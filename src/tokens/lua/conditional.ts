import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

const conditionalScopes: RawAtomTheme[] = [
  {
    name: 'lua::conditional',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: colors.magentaColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(conditionalScopes, luaTypes)
