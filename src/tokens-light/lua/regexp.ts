import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const regexpScopes: RawAtomTheme[] = [
  {
    name: 'lua::operator',
    scope: [],
    rawScope: ['string.regexp'],
    foreground: colors.purpleColors400,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(regexpScopes, luaTypes)
