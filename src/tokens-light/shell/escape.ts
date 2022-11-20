import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const escapeScopes: RawAtomTheme[] = [
  {
    name: 'shell::escape',
    scope: [],
    rawScope: ['constant.character.escape'],
    foreground: colors.cyanColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(escapeScopes, shellTypes)
