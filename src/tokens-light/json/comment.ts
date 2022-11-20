import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsonTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'json::comment',
    scope: [],
    extraScope: ['support.type.property-name.json.comments'],
    rawScope: [],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, jsonTypes)
