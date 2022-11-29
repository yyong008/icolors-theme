import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const builtinScopes: RawAtomTheme[] = [
  {
    name: 'shell::builtin',
    scope: [],
    rawScope: ['support.function.builtin'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(builtinScopes, shellTypes)
