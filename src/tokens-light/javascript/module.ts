import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const moduleScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::module::import/from/export/default',
    scope: [],
    rawScope: [
      'keyword.control.import',
      'keyword.control.from',
      'keyword.control.export',
      'keyword.control.default'
    ],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::import-content',
    scope: [],
    rawScope: ['meta.import'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::from::alias',
    scope: ['variable.other.readwrite.alias', 'variable.other.object'],
    rawScope: ['meta.import'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::dynamic::import',
    scope: ['keyword.operator.expression.import'],
    rawScope: ['meta.import'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(moduleScopes, jsTypes)
