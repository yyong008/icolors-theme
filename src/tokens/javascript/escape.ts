import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

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
