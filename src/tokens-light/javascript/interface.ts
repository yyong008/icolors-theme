import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const interfaceScopes: RawAtomTheme[] = [
  {
    name: '(c|m)ts(x)::interface',
    scope: [],
    rawScope: ['storage.type.interface'],
    foreground: colors.purpleColors400,
    fontStyle: ''
  },
  {
    name: '(c|m)ts(x)::interfaceName',
    scope: [],
    rawScope: ['meta.interface'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(interfaceScopes, jsTypes)
