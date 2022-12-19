import type { RawAtomTheme } from '../common'

import colors, {
  mapColorsReverseWithRuntimeWeightFn,
  mapColorsWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const functionScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::functionKeyword',
    scope: [],
    rawScope: ['storage.type.function'],
    foreground: mapColorsReverseWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::functionName',
    scope: [],
    rawScope: ['entity.name.function'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::functionParams',
    scope: [],
    rawScope: ['variable.parameter'],
    foreground: colors.grayColors400,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::arrowFunction',
    scope: [],
    rawScope: ['storage.type.function.arrow'],
    foreground: mapColorsReverseWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::functionCall',
    scope: [],
    rawScope: ['meta.function-call'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(functionScopes, jsTypes)
