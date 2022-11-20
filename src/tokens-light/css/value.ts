import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const valueScopes: RawAtomTheme[] = [
  {
    name: 'styles::props',
    scope: [],
    rawScope: [
      'meta.property-value',
      'support.constant.property-value',
      'meta.embedded.block'
    ],
    foreground: mapColorsWithRuntimeWeightFn('200'),
    fontStyle: ''
  },
  {
    name: 'styles::value.number',
    scope: [],
    rawScope: ['constant.numeric'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: 'styles::css:value',
    scope: [],
    rawScope: ['support.function.misc'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: 'styles::pseudo-class',
    scope: [],
    rawScope: ['entity.other.attribute-name.pseudo-class'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: 'styles::pseudo-element',
    scope: [],
    rawScope: ['entity.other.attribute-name.pseudo-element'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'styles::pattern',
    scope: [],
    rawScope: ['keyword.operator.pattern'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(valueScopes, styleTypes)
