import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'shell::variable',
    scope: [],
    rawScope: [
      // $0, $1,...
      'punctuation.definition.variable',
      'variable.other.special', // $0 -> 0
      'variable.other.positional', // $1
      'variable.other.normal' // val=`expr 2 + 2` echo "两数之和为 : $val"
    ],
    foreground: colors.magentaColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(variableScopes, shellTypes)
