import type { RawAtomTheme } from '../common'

import { mapColorsReverseWithRuntimeWeight } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const moduleScopes: RawAtomTheme[] = [
  {
    name: 'rust::module',
    scope: [],
    rawScope: ['keyword.use', 'keyword.other', 'meta.use.rust'],
    foreground: mapColorsReverseWithRuntimeWeight('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(moduleScopes, rustTypes)
