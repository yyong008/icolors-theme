import type { StatusBar, StatusBarItem } from '../types/StatusBar.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const statusBarColors = (): Partial<StatusBar> => ({
  [`statusBar.foreground`]: colors.grayColors1300,
  [`statusBar.background`]: mapColorsWithRuntimeWeight('200'),
  ['statusBar.border']: mapColorsWithRuntimeWeight('100'),
  ['statusBar.debuggingBackground']: '',
  ['statusBar.debuggingForeground']: '',
  ['statusBar.debuggingBorder']: '',
  ['statusBar.noFolderForeground']: '',
  ['statusBar.noFolderBackground']: '',
  ['statusBar.noFolderBorder']: '',
  ['statusBar.focusBorder']: ''
})

const statusBarItemColors = (): Partial<StatusBarItem> => ({
  [`statusBarItem.activeBackground`]: mapColorsWithRuntimeWeight('900'),
  [`statusBarItem.hoverBackground`]: mapColorsWithRuntimeWeight('800'),
  [`statusBarItem.prominentForeground`]: colors.grayColors200,
  [`statusBarItem.prominentBackground`]: colors.grayColors200,
  [`statusBarItem.prominentHoverBackground`]: colors.grayColors1100,
  [`statusBarItem.remoteBackground`]: mapColorsWithRuntimeWeight('600'),
  [`statusBarItem.remoteForeground`]: colors.grayColors100,
  [`statusBarItem.errorBackground`]: colors.redColors700,
  [`statusBarItem.errorForeground`]: colors.grayColors700,
  [`statusBarItem.warningBackground`]: colors.yellowColors700,
  [`statusBarItem.warningForeground`]: colors.grayColors100,
  [`statusBarItem.compactHoverBackground`]: colors.cyanColors700,
  [`statusBarItem.focusBorder`]: colors.grayColors100
})

export default {
  statusBarColors,
  statusBarItemColors
}
