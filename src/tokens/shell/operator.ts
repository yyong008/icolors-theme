import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

const operatorScopes: RawAtomTheme[] = [
  {
    name: 'shell::operator',
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
      'keyword.control.switch',
      'keyword.control',
      'meta.scope.if-block'
    ],
    foreground: colors.magentaColors800,
    fontStyle: 'bold italic'
  }
]

export default gnAtomThemeFns(operatorScopes, shellTypes)
