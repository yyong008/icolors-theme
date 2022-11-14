import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
