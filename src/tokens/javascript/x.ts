import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
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
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(xScopes, jsxTypes)
