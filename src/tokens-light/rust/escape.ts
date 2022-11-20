import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

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
