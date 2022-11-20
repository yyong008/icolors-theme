import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
