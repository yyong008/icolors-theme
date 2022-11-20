import type { RawAtomTheme } from '../common.js'

import { mapColors } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { tomlTypes } from '../constants.js'

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
