import type { RawAtomTheme } from '../common'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsxTypes } from '../constants'

const xScopes: RawAtomTheme[] = [
  {
    name: '(j|t)sx::tagName',
    scope: [],
    rawScope: ['entity.name.tag'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::tagProps',
    scope: [],
    rawScope: ['entity.other.attribute-name'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::punctuation',
    scope: [],
    rawScope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end',
      'punctuation.separator.key-value'
    ],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::punctuation',
    scope: [],
    rawScope: ['keyword.control.type'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::tag',
    scope: [],
    rawScope: ['entity.name.tag', 'entity.name.tag.js'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::tag::attribute',
    scope: [],
    rawScope: ['entity.other.attribute-name', 'entity.other.attribute-name.js'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(xScopes, jsxTypes)
