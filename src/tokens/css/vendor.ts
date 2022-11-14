import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
