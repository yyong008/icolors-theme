import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

const operatorScopes: RawAtomTheme[] = [
  {
    name: 'styles::operator',
    scope: [],
    rawScope: [
      'keyword.operator.logical',
      'keyword.operator',
      'keyword.other.important',
      'keyword.operator.combinator'
    ],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(operatorScopes, styleTypes)
