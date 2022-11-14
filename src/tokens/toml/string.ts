import type { RawAtomTheme } from '../common'

import { mapColors } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { tomlTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'toml::string',
    scope: [],
    rawScope: [
      'string.quoted.single.basic.line',
      'string.quoted.double.basic.line'
    ],
    foreground: mapColors('grayColors200'),
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, tomlTypes)
