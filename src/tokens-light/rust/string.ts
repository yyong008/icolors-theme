import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'rust::{str, String}',
    scope: [],
    rawScope: [
      'string.quoted.double',
      'string.quoted.signle',
      'string.quoted.single.char'
    ],
    foreground: colors.grayColors1200,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, rustTypes)
