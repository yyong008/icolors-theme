import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const macroScopes: RawAtomTheme[] = [
  {
    name: 'rust::marco',
    scope: [],
    rawScope: ['entity.name.function.macro'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(macroScopes, rustTypes)
