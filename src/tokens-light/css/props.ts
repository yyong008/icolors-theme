import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const propsScopes: RawAtomTheme[] = [
  {
    name: 'styles::props',
    scope: [],
    rawScope: ['support.type.property-name'],
    foreground: mapColorsWithRuntimeWeightFn('100'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(propsScopes, styleTypes)
