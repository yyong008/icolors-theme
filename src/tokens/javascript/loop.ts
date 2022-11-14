import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const loopScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::label',
    scope: [],
    rawScope: ['keyword.control.loop', 'keyword.operator.expression.of'],
    foreground: colors.purpleColors400,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(loopScopes, jsTypes)
