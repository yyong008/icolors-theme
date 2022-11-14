import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
