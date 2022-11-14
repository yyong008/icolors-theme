import type Tab from '../types/Tab'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: colors.grayColors1100,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors900,
  ['tab.border']: colors.grayColors900,
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: mapColorsWithRuntimeWeight('400'),
  ['tab.lastPinnedBorder']: mapColorsWithRuntimeWeight('400'),
  ['tab.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['tab.unfocusedActiveBorder']: '',
  ['tab.activeBorderTop']: '',
  ['tab.unfocusedActiveBorderTop']: '',
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: colors.grayColors1000,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: mapColorsWithRuntimeWeight('400'),
  ['tab.unfocusedHoverBorder']: '',
  ['tab.activeModifiedBorder']: '',
  ['tab.inactiveModifiedBorder']: '',
  ['tab.unfocusedActiveModifiedBorder']: '',
  ['tab.unfocusedInactiveModifiedBorder']: ''
})

export default { tab }
