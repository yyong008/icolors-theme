import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const variableScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::variable.constant',
    scope: [],
    rawScope: ['variable.other.constant'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::variable.object.constant',
    scope: [],
    rawScope: ['variable.other.constant.object'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::variable.object.constant',
    scope: [],
    rawScope: ['variable.other.readwrite'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::variable.property.target',
    scope: [],
    rawScope: ['support.variable.property.target'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(variableScopes, jsTypes)
