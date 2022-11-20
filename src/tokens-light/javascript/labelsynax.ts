import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const labelScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::label',
    scope: [],
    rawScope: ['entity.name.label'],
    foreground: colors.cyanColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(labelScopes, jsTypes)
