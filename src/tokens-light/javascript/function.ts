import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const functionScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::functionKeyword',
    scope: [],
    rawScope: ['storage.type.function'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::functionName',
    scope: [],
    rawScope: ['entity.name.function'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::functionParams',
    scope: [],
    rawScope: ['variable.parameter'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::arrowFunction',
    scope: [],
    rawScope: ['storage.type.function.arrow'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::functionCall',
    scope: [],
    rawScope: ['meta.function-call'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(functionScopes, jsTypes)
