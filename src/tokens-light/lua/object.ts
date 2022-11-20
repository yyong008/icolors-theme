import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const objectScopes: RawAtomTheme[] = [
  {
    name: 'lua::object',
    scope: [],
    rawScope: ['meta.object-literal.key'],
    foreground: colors.orangeColors300,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(objectScopes, luaTypes)
