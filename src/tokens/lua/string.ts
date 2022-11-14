import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'lua::string',
    scope: [],
    rawScope: [
      'string.quoted.single',
      'string.quoted.double',
      'string.quoted.other.multiline'
    ],
    foreground: colors.greenColors300,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, luaTypes)
