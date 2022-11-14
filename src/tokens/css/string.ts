import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
