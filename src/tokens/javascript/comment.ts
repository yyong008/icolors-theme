import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::comment',
    scope: [],
    rawScope: [
      'comment.line.double-slash',
      'comment.block',
      'comment.block.documentation',
      'comment.line.shebang'
    ],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, jsTypes)
