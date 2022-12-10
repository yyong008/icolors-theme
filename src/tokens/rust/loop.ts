import type { RawAtomTheme } from '../common'

import { mapColorsReverseWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const loopScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::while',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: mapColorsReverseWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(loopScopes, rustTypes)
