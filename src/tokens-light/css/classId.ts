import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const tagClassIdScopes: RawAtomTheme[] = [
  {
    name: 'styles::tag/class/id',
    scope: [],
    rawScope: [
      'entity.name.tag',
      'entity.other.attribute-name.id',
      'entity.other.attribute-name.class'
    ],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold italic'
  }
]

export default gnAtomThemeFns(tagClassIdScopes, styleTypes)
