import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
