import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { htmlTypes } from '../constants'

const tagScopes: RawAtomTheme[] = [
  {
    name: 'html::punctuation',
    scope: [],
    rawScope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    foreground: colors.magentaColors400,
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
    foreground: mapColorsWithRuntimeWeightFn('300'),
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
