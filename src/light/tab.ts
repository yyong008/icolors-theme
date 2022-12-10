import type Tab from '../types/Tab.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: mapColorsWithRuntimeWeight('100'),
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors300,
  ['tab.border']: '',
  ['tab.inactiveForeground']: colors.grayColors1100,
  ['tab.activeForeground']: colors.grayColors1100,
  ['tab.lastPinnedBorder']: '',
  ['tab.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['tab.unfocusedActiveBorder']: '',
  ['tab.activeBorderTop']: '',
  ['tab.unfocusedActiveBorderTop']: '',
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: '',
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
