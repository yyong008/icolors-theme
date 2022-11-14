import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { dockerFileTypes } from '../constants'

const dockerScopes: RawAtomTheme[] = [
  {
    name: 'dockerfile::comment',
    scope: [],
    rawScope: ['comment.line.number-sign.dockerfile'],
    foreground: colors.grayColors800,
    fontStyle: 'bold italic'
  },
  {
    name: 'dockerfile::source',
    scope: [],
    rawScope: ['source.dockerfile'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  },
  {
    name: 'dockerfile::special-method',
    scope: [],
    rawScope: ['keyword.other.special-method.dockerfile'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(dockerScopes, dockerFileTypes)
