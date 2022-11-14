import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

const escapeScopes: RawAtomTheme[] = [
  {
    name: 'lua::escape',
    scope: [],
    rawScope: ['constant.character.escape'],
    foreground: colors.cyanColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(escapeScopes, luaTypes)
