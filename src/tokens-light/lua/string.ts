import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

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
