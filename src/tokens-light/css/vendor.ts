import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const vendorScopes: RawAtomTheme[] = [
  {
    name: 'styles::variable',
    scope: [],
    rawScope: ['support.type.vendored.property-name'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(vendorScopes, styleTypes)
