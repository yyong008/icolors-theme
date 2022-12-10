import type { RawAtomTheme } from '../common'

import colors, {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::string',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: colors.grayColors300,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::string',
    scope: [],
    rawScope: ['string.template'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::string::template::$',
    scope: [],
    rawScope: [
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end'
    ],
    foreground: mapColorsReverseWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, jsTypes)
