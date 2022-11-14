import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
