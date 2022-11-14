import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

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
