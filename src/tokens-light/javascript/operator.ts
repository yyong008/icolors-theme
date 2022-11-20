import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const operatorScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::operator',
    scope: [],
    rawScope: [
      'keyword.operator.assignment',
      'keyword.operator.comparison',
      'keyword.operator.logical',
      'keyword.operator.arithmetic',
      'keyword.operator.expression.typeof',
      'keyword.operator.expression.instanceof',
      'keyword.operator.increment',
      'keyword.operator.decrement',
      'keyword.operator.relational',
      'keyword.operator.expression.delete',
      'keyword.operator.new',
      'keyword.operator.bitwise',
      'keyword.operator.bitwise.shift',
      'keyword.operator.spread',
      'keyword.operator.ternary',
      'keyword.operator.assignment.compound',
      'keyword.operator.assignment.compound.bitwise',
      'keyword.operator.expression.in',
      'keyword.operator.expression.void',
      'punctuation.accessor.optional',
      'keyword.generator.asterisk',
      'keyword.control.as',
      'keyword.control.switch'
    ],
    foreground: colors.magentaColors600,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(operatorScopes, jsTypes)
