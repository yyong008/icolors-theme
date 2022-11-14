import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

const builtinScopes: RawAtomTheme[] = [
  {
    name: 'shell::builtin',
    scope: [],
    rawScope: ['support.function.builtin'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(builtinScopes, shellTypes)
