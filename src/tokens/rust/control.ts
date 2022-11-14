import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const controlScopes: RawAtomTheme[] = [
  {
    name: 'rust::keyword.control',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(controlScopes, rustTypes)
