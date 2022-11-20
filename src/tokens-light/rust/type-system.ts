import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const typeSystemScopes: RawAtomTheme[] = [
  {
    name: 'rust::typeSystem',
    scope: [],
    rawScope: [
      'entity.name.type',
      'punctuation.brackets.angle',
      'storage.type'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(typeSystemScopes, rustTypes)
