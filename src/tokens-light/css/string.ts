import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'styles::string::{quoted}',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, styleTypes)
