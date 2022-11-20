import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const enumScopes: RawAtomTheme[] = [
  {
    name: 'rust::enum',
    scope: [],
    rawScope: ['punctuation.definition.attribute', 'meta.attribute'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(enumScopes, rustTypes)
