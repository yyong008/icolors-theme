import type { RawAtomTheme } from '../common'

import colors, {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const regexpScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::regexp::shash',
    scope: [],
    rawScope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end'
    ],
    foreground: mapColorsReverseWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::regexp',
    scope: [],
    rawScope: [],
    extraScope: ['punctuation.definition.character-class'],
    foreground: mapColorsReverseWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::regexp',
    scope: [],
    rawScope: [],
    extraScope: [
      'punctuation.definition.group.regexp',
      '	keyword.operator.or.regexp'
    ],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'constant.other.character-class.set',
    scope: [],
    rawScope: [],
    extraScope: ['constant.other.character-class.set.regexp'],
    foreground: mapColorsReverseWithRuntimeWeightFn('200'),
    fontStyle: 'bold'
  },
  {
    name: 'constant.other.character-class.set',
    scope: [],
    rawScope: [],
    extraScope: ['meta.group.regexp'],
    foreground: mapColorsReverseWithRuntimeWeightFn('100'),
    fontStyle: 'bold'
  },
  {
    name: 'keyword.control.anchor',
    scope: [],
    rawScope: [],
    extraScope: ['keyword.control.anchor.regexp'],
    foreground: mapColorsWithRuntimeWeightFn('100'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(regexpScopes, jsTypes)
