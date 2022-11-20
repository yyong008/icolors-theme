import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const constantScopes: RawAtomTheme[] = [
  {
    name: 'lua::comment',
    scope: [],
    rawScope: ['keyword.local'],
    foreground: colors.volcanoColors700,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(constantScopes, luaTypes)
