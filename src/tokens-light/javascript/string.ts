import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeight } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::string',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  },
  {
    name: '(c|m)(j|t)s(x)::string',
    scope: [],
    rawScope: ['string.template'],
    foreground: mapColorsWithRuntimeWeight('600'),
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, jsTypes)
