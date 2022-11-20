import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const attributeScopes: RawAtomTheme[] = [
  {
    name: 'rust::attribute',
    scope: [],
    rawScope: ['punctuation.definition.attribute', 'meta.attribute'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(attributeScopes, rustTypes)
