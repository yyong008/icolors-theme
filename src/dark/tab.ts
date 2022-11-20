import type Tab from '../types/Tab'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: colors.grayColors1100,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors1000,
  ['tab.border']: colors.grayColors900,
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: colors.grayColors100,
  ['tab.lastPinnedBorder']: colors.grayColors900,
  ['tab.activeBorder']: '',
  ['tab.unfocusedActiveBorder']: colors.grayColors900,
  ['tab.activeBorderTop']: mapColorsWithRuntimeWeight('400'),
  ['tab.unfocusedActiveBorderTop']: colors.grayColors900,
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: colors.grayColors1000,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: colors.grayColors900,
  ['tab.unfocusedHoverBorder']: colors.grayColors900,
  ['tab.activeModifiedBorder']: colors.grayColors900,
  ['tab.inactiveModifiedBorder']: colors.grayColors900,
  ['tab.unfocusedActiveModifiedBorder']: colors.grayColors900,
  ['tab.unfocusedInactiveModifiedBorder']: colors.grayColors900
})

export default { tab }
