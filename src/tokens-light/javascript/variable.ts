import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
