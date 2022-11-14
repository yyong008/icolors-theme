import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

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
    foreground: colors.cyanColors600,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::import-content',
    scope: [],
    rawScope: ['meta.import'],
    foreground: colors.cyanColors400,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::from::alias',
    scope: ['variable.other.readwrite.alias', 'variable.other.object'],
    rawScope: ['meta.import'],
    foreground: colors.cyanColors400,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::module::dynamic::import',
    scope: ['keyword.operator.expression.import'],
    rawScope: ['meta.import'],
    foreground: colors.magentaColors500,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(moduleScopes, jsTypes)
