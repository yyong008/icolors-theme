import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const enumScopes: RawAtomTheme[] = [
  {
    name: 'rust::enum',
    scope: [],
    rawScope: ['punctuation.definition.attribute', 'meta.attribute'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(enumScopes, rustTypes)
