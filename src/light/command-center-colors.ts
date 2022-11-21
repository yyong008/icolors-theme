import CommandCenter from 'src/types/CommandCenter'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const commandCenterColors = (): Partial<CommandCenter> => ({
  ['commandCenter.foreground']: mapColorsWithRuntimeWeight('100'),
  ['commandCenter.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['commandCenter.background']: colors.grayColors300,
  ['commandCenter.activeBackground']: '',
  ['commandCenter.border']: mapColorsWithRuntimeWeight('400')
})

export default {
  commandCenterColors
}
