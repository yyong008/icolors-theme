import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const traitScopes: RawAtomTheme[] = [
  {
    name: 'rust::trait',
    scope: [],
    rawScope: [
      // trait
      'entity.name.function'
    ],
    foreground: colors.grayColors400,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(traitScopes, rustTypes)
