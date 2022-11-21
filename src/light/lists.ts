import type { List } from '../types/List'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const list = (): Partial<List> => ({
  ['list.activeSelectionBackground']: mapColorsWithRuntimeWeight('100'),
  ['list.inactiveSelectionBackground']: '',
  ['list.hoverBackground']: mapColorsWithRuntimeWeight('100'),
  ['list.dropBackground']: '',
  ['list.highlightForeground']: '',
  'list.activeSelectionForeground': colors.grayColors1100,
  'list.activeSelectionIconForeground': '',
  'list.focusBackground': '',
  'list.focusForeground': '',
  'list.focusHighlightForeground': '',
  'list.focusOutline': '',
  'list.focusAndSelectionOutline': '',
  'list.hoverForeground': '',
  'list.inactiveSelectionForeground': '',
  'list.inactiveSelectionIconForeground': '',
  'list.inactiveFocusBackground': '',
  'list.inactiveFocusOutline': '',
  'list.invalidItemForeground': '',
  'list.errorForeground': '',
  'list.warningForeground': '',
  'list.filterMatchBackground': '',
  'list.filterMatchBorder': '',
  'list.deemphasizedForeground': ''
})

export default { list }
