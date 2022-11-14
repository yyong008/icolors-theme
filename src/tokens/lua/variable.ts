import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
