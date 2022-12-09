import type Tab from '../types/Tab'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: colors.grayColors900,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors1000,
  ['tab.border']: '',
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: colors.grayColors100,
  ['tab.lastPinnedBorder']: colors.grayColors900,
  ['tab.activeBorder']: mapColorsWithRuntimeWeight('200'),
  ['tab.unfocusedActiveBorder']: colors.grayColors900,
  ['tab.activeBorderTop']: '',
  ['tab.unfocusedActiveBorderTop']: colors.grayColors900,
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: colors.grayColors1000,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: '',
  ['tab.unfocusedHoverBorder']: '',
  ['tab.activeModifiedBorder']: '',
  ['tab.inactiveModifiedBorder']: '',
  ['tab.unfocusedActiveModifiedBorder']: '',
  ['tab.unfocusedInactiveModifiedBorder']: ''
})

export default { tab }
