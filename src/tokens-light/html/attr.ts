import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { dockerFileTypes } from '../constants.js'

const attrScopes: RawAtomTheme[] = [
  {
    name: 'html::attributeName',
    scope: [],
    rawScope: ['entity.other.attribute-name'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: 'html::attributeClass',
    scope: [],
    rawScope: ['meta.attribute.class'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: 'html::attributeId',
    scope: [],
    rawScope: ['meta.attribute.id'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: 'bold'
  },
  {
    name: 'html::attributeQuoted',
    scope: [],
    rawScope: ['string.quoted.double', 'string.quoted.single'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: 'html::derivative',
    scope: [],
    rawScope: [],
    extraScope: ['text.html.derivative'],
    foreground: colors.grayColors100,
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

export default gnAtomThemeFns(attrScopes, dockerFileTypes)
