import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'lua::variable',
    scope: [],
    rawScope: ['constant.language'],
    foreground: colors.greenColors500,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(variableScopes, luaTypes)
