import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const escapeScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::escape',
    scope: [],
    rawScope: ['constant.character.escape'],
    foreground: colors.cyanColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(escapeScopes, jsTypes)
