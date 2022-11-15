import type Tab from '../types/Tab'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: colors.grayColors1100,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors1000,
  ['tab.border']: colors.grayColors1100,
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: colors.grayColors100,
  ['tab.lastPinnedBorder']: '',
  ['tab.activeBorder']: '',
  ['tab.unfocusedActiveBorder']: '',
  ['tab.activeBorderTop']: mapColorsWithRuntimeWeight('400'),
  ['tab.unfocusedActiveBorderTop']: '',
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: colors.grayColors1000,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: colors.grayColors700,
  ['tab.unfocusedHoverBorder']: colors.grayColors1100,
  ['tab.activeModifiedBorder']: '',
  ['tab.inactiveModifiedBorder']: '',
  ['tab.unfocusedActiveModifiedBorder']: '',
  ['tab.unfocusedInactiveModifiedBorder']: ''
})

export default { tab }
