import type { RawAtomTheme } from '../common.js'

import colors, {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { htmlTypes } from '../constants.js'

const attrScopes: RawAtomTheme[] = [
  {
    name: 'html::attributeName',
    scope: [],
    rawScope: ['entity.other.attribute-name'],
    foreground: mapColorsReverseWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: 'html::attributeClass',
    scope: [],
    rawScope: ['meta.attribute.class'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: 'html::attributeId',
    scope: [],
    rawScope: ['meta.attribute.id'],
    foreground: colors.grayColors1100,
    fontStyle: 'bold'
  },
  {
    name: 'html::attributeQuoted',
    scope: [],
    rawScope: ['string.quoted.double', 'string.quoted.single'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: 'html::derivative',
    scope: [],
    rawScope: [],
    extraScope: ['text.html.derivative'],
    foreground: colors.grayColors900,
    fontStyle: ''
  },
  {
    name: 'html::punctuation::separatorScope',
    scope: [],
    rawScope: ['punctuation.separator.key-value'],
    foreground: mapColorsWithRuntimeWeightFn('900'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(attrScopes, htmlTypes)
