import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

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
