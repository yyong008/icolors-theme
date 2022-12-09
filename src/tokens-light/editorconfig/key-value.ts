import type { RawAtomTheme } from '../common.js'

import colors, {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { editorconfigTypes } from '../constants.js'

const keyValueScopes: RawAtomTheme[] = [
  {
    name: 'editorconfig::comment',
    scope: [],
    rawScope: [
      'keyword.other.definition.root',
      'keyword.other.definition.indent_style',
      'keyword.other.definition.indent_size',
      'keyword.other.definition.charset',
      'keyword.other.definition.tab_width',
      'keyword.other.definition.trim_trailing_whitespace',
      'keyword.other.definition.insert_final_newline',
      'keyword.other.definition.end_of_line'
    ],
    foreground: colors.grayColors1300,
    fontStyle: 'bold'
  },
  {
    name: 'editorconfig::comment',
    scope: [],
    rawScope: [
      'constant.language.space',
      'constant.numeric.decimal.integer.int',
      'constant.language.boolean.true',
      'constant.language.boolean.false',
      'constant.language.lf',
      'constant.language.charset.encoding.utf-8',
      'constant.language.tab'
    ],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: 'editorconfig::key-value',
    scope: [],
    rawScope: ['punctuation.separator.key-value'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'editorconfig::wildcard',
    scope: [],
    rawScope: ['keyword.operator.glob.wildcard'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'editorconfig::group-title',
    scope: [],
    rawScope: ['entity.name.section.group-title'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(keyValueScopes, editorconfigTypes)
