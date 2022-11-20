import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { tomlTypes } from '../constants.js'

const propsScopes: RawAtomTheme[] = [
  {
    name: 'toml::props',
    scope: [],
    rawScope: ['support.type.property-name.table'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(propsScopes, tomlTypes)
