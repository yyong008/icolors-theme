import type { RawAtomTheme } from '../common.js'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeight
} from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const atRuleScopes: RawAtomTheme[] = [
  {
    name: 'styles::at-rule',
    scope: [],
    rawScope: [
      'keyword.control.at-rule',
      'keyword.control.at-rule.namespace',
      'keyword.control.at-rule.import',
      'keyword.control.at-rule.keyframes',
      'keyword.control.at-rule.media',
      'keyword.control.at-rule.page',
      'keyword.control.at-rule.supports',
      'keyword.control.at-rule.font-face',
      'keyword.control.at-rule.font-feature-values',
      'keyword.control.at-rule.layer.tailwind',
      'keyword.control.at-rule.counter-style',
      'meta.at-rule.header'
    ],
    foreground: mapColorsWithRuntimeWeightFn('1000'),
    fontStyle: 'bold'
  },
  {
    name: 'styles::keyframe',
    scope: [],
    rawScope: ['variable.parameter.keyframe-list'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  },
  {
    name: 'styles::keyframe-offset.percentage',
    scope: [],
    rawScope: ['entity.other.keyframe-offset.percentage'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(atRuleScopes, styleTypes)
