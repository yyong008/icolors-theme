import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
