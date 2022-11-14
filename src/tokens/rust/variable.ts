import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

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
