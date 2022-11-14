import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'rust::{str, String}',
    scope: [],
    rawScope: [
      'string.quoted.double',
      'string.quoted.signle',
      'string.quoted.single.char'
    ],
    foreground: colors.grayColors100,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, rustTypes)
