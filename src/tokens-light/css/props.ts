import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const propsScopes: RawAtomTheme[] = [
  {
    name: 'styles::props',
    scope: [],
    rawScope: ['support.type.property-name'],
    foreground: colors.grayColors1100,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(propsScopes, styleTypes)
