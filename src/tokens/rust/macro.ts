import type { RawAtomTheme } from '../common'

import { mapColorsReverseWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const macroScopes: RawAtomTheme[] = [
  {
    name: 'rust::marco',
    scope: [],
    rawScope: ['entity.name.function.macro'],
    foreground: mapColorsReverseWithRuntimeWeightFn('900'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(macroScopes, rustTypes)
