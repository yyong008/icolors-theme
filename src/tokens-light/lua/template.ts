import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const templateScopes: RawAtomTheme[] = [
  {
    name: 'lua::template',
    scope: [],
    rawScope: ['string.template'],
    foreground: colors.blueColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(templateScopes, luaTypes)
