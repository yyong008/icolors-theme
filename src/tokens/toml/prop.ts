import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { tomlTypes } from '../constants'

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
