import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
