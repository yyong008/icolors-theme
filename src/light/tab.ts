import type Tab from '../types/Tab.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: mapColorsWithRuntimeWeight('100'),
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors300,
  ['tab.border']: '', // border associate
  ['tab.inactiveForeground']: colors.grayColors1100,
  ['tab.activeForeground']: colors.grayColors1100,
  ['tab.lastPinnedBorder']: colors.redColors1000, // border associate
  ['tab.activeBorder']: mapColorsWithRuntimeWeight('400'), // border associate
  ['tab.unfocusedActiveBorder']: '', // colors.grayColors900,
  ['tab.activeBorderTop']: '', // border associate
  ['tab.unfocusedActiveBorderTop']: '', //colors.grayColors900, // border associate
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: '',
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: '', // border associate
  ['tab.unfocusedHoverBorder']: '', // border associate
  ['tab.activeModifiedBorder']: '', // border associate
  ['tab.inactiveModifiedBorder']: '', // border associate
  ['tab.unfocusedActiveModifiedBorder']: '', // border associate
  ['tab.unfocusedInactiveModifiedBorder']: '' // border associate
})

export default { tab }
