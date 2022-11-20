import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

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
