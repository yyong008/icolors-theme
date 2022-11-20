import type {
  ActivityBar,
  ActivityBarBadge,
  ActivityBarItem
} from '../types/ActivityBar.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const activityBar = (): Partial<ActivityBar> => ({
  ['activityBar.background']: colors.grayColors300,
  ['activityBar.foreground']: mapColorsWithRuntimeWeight('300'),
  ['activityBar.dropBorder']: '',
  ['activityBar.inactiveForeground']: mapColorsWithRuntimeWeight('800'),
  ['activityBar.border']: colors.grayColors900
})

const activityBarBadge = (): Partial<ActivityBarBadge> => ({
  ['activityBarBadge.background']: mapColorsWithRuntimeWeight('600'),
  ['activityBarBadge.foreground']: colors.grayColors100
})

const activityBarItem = (): Partial<ActivityBarItem> => ({
  ['activityBarItem.settingsProfilesHoverForeground']: '',
  ['activityBarItem.settingsProfilesBackground']: '',
  ['activityBarItem.settingsProfilesForeground']: ''
})

export default { activityBar, activityBarBadge, activityBarItem }
