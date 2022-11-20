import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const functionScopes: RawAtomTheme[] = [
  {
    name: 'rust::fn',
    scope: [],
    rawScope: ['keyword.other.fn'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'rust::fnName',
    scope: [],
    rawScope: ['entity.name.function'],
    foreground: mapColorsWithRuntimeWeightFn('200'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(functionScopes, rustTypes)
