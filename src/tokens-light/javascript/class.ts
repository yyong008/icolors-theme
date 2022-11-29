import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const classScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::classKeyword',
    scope: [],
    rawScope: ['storage.type.class'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::className',
    scope: [],
    rawScope: ['entity.name.type.class'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::thisKeyword',
    scope: [],
    rawScope: ['variable.language.this'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'italic'
  },
  {
    name: '(c|m)(j|t)s(x)::classProperty',
    scope: [],
    rawScope: ['variable.object.property'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::modifier',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::property',
    scope: [],
    rawScope: ['variable.object.property'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(classScopes, jsTypes)
