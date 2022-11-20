import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(interfaceScopes, jsTypes)
