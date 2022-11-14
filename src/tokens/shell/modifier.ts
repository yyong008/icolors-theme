import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

const modifierScopes: RawAtomTheme[] = [
  {
    name: 'shell::modifier',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(modifierScopes, shellTypes)
