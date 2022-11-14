import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const escapeScopes: RawAtomTheme[] = [
  {
    name: 'rust::escape',
    scope: [],
    rawScope: [
      'constant.character.escape.backslash',
      'constant.character.escape'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(escapeScopes, rustTypes)
