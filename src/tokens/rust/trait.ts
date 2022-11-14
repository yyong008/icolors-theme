import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

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
