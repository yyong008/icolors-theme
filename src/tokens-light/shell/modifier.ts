import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const modifierScopes: RawAtomTheme[] = [
  {
    name: 'shell::modifier',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(modifierScopes, shellTypes)
