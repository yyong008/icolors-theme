import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const enumScopes: RawAtomTheme[] = [
  {
    name: '(c|m)ts(x)::enum',
    scope: [],
    rawScope: ['storage.type.enum'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(c|m)ts(x)::enum::entity',
    scope: [],
    rawScope: ['entity.name.type.enum'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  },
  {
    name: '(c|m)ts(x)::enum::enummember',
    scope: [],
    rawScope: ['entity.name.type.enum'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(enumScopes, jsTypes)
