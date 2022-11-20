import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const moduleScopes: RawAtomTheme[] = [
  {
    name: 'rust::module',
    scope: [],
    rawScope: ['keyword::use', 'keyword.other', 'meta.use.rust'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(moduleScopes, rustTypes)
