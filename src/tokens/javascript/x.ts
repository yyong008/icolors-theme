import type { RawAtomTheme } from '../common'

import colors, {
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
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::tagProps',
    scope: [],
    rawScope: ['entity.other.attribute-name'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
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
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },

  {
    name: '(j|t)sx::tag',
    scope: [],
    rawScope: ['entity.name.tag', 'entity.name.tag'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::tag::attribute',
    scope: [],
    rawScope: ['entity.other.attribute-name', 'entity.other.attribute-name.js'],
    foreground: mapColorsReverseWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::content',
    scope: [],
    rawScope: ['meta.jsx.children'],
    foreground: colors.grayColors200,
    fontStyle: ''
  },
  {
    name: '(j|t)sx::tag',
    scope: [],
    rawScope: [
      '	punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    foreground: colors.grayColors700,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(xScopes, jsxTypes)
