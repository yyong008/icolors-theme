import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { htmlTypes } from '../constants.js'

const tagScopes: RawAtomTheme[] = [
  {
    name: 'html::punctuation',
    scope: [],
    rawScope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    foreground: colors.grayColors700,
    fontStyle: ''
  },
  {
    name: 'html::tag',
    scope: [],
    rawScope: ['entity.name.tag'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: 'html::tagProps',
    scope: [],
    rawScope: ['entity.other.attribute-name'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'html::tagPropsQuote',
    scope: [],
    rawScope: ['string.quoted.double', 'string.quoted.single'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: 'html::attrSeparator',
    scope: [],
    rawScope: ['punctuation.separator.key-value'],
    foreground: colors.magentaColors400,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(tagScopes, htmlTypes)
