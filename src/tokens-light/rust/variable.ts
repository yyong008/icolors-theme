import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'rust::variable',
    scope: [],
    rawScope: ['variable.other'],
    foreground: colors.grayColors100,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(variableScopes, rustTypes)
