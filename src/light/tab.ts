import type Tab from '../types/Tab.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: colors.grayColors300,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors300,
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
  ['tab.hoverBackground']: colors.grayColors300,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: '',
  ['tab.unfocusedHoverBorder']: colors.grayColors900,
  ['tab.activeModifiedBorder']: colors.grayColors900,
  ['tab.inactiveModifiedBorder']: colors.grayColors900,
  ['tab.unfocusedActiveModifiedBorder']: colors.grayColors900,
  ['tab.unfocusedInactiveModifiedBorder']: colors.grayColors900
})

export default { tab }
