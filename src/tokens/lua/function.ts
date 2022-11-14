import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

const functionScopes: RawAtomTheme[] = [
  {
    name: 'lua::functionKeyword',
    scope: [],
    rawScope: ['storage.type.function'],
    foreground: colors.purpleColors400,
    fontStyle: 'bold'
  },
  {
    name: 'lua::functionParams',
    scope: [],
    rawScope: ['meta.function'],
    foreground: colors.goldColors600,
    fontStyle: ''
  },
  {
    name: 'lua::functionCall',
    scope: [],
    rawScope: ['support.function'],
    foreground: colors.blueColors500,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(functionScopes, luaTypes)
