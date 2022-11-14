import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

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
