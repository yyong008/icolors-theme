import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsonTypes } from '../constants'

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
