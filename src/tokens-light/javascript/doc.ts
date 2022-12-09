import type { RawAtomTheme } from '../common'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsDocTyps } from '../constants'

const docScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::type',
    scope: [],
    rawScope: ['storage.type.class'],
    foreground: mapColorsReverseWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::type',
    scope: [],
    rawScope: ['entity.name.type.instance'],
    foreground: mapColorsReverseWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::variable',
    scope: [],
    rawScope: ['variable.other'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(docScopes, jsDocTyps)
