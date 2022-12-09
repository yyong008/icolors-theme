import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsxTypes } from '../constants'

const typeSystemScopes: RawAtomTheme[] = [
  {
    name: '(j|t)sx::type.primitive',
    scope: [],
    rawScope: [
      'support.type.primitive',
      'entity.name.type',
      'entity.name.type.alias'
    ],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::type.buildin',
    scope: [],
    rawScope: ['support.type.builtin'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::type.key',
    scope: [],
    rawScope: ['storage.type.type'],
    foreground: colors.magentaColors600,
    fontStyle: 'bold italic'
  },
  {
    name: '(j|t)sx::type.declare',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::namespace::name',
    scope: [],
    rawScope: ['entity.name.type.module'],
    foreground: mapColorsWithRuntimeWeightFn('900'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(typeSystemScopes, jsxTypes)
