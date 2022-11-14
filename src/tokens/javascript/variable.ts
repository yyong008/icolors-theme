import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const variableScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::variable.constant',
    scope: [],
    rawScope: ['variable.other.constant'],
    foreground: colors.cyanColors600,
    fontStyle: 'bold'
  },
  {
    name: '(c|m)(j|t)s(x)::variable.object.constant',
    scope: [],
    rawScope: ['variable.other.constant.object'],
    foreground: colors.blueColors500,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::variable.property.target',
    scope: [],
    rawScope: ['support.variable.property.target'],
    foreground: colors.blueColors500,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(variableScopes, jsTypes)
