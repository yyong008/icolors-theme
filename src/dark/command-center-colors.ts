import CommandCenter from 'src/types/CommandCenter'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const commandCenterColors = (): Partial<CommandCenter> => ({
  ['commandCenter.foreground']: mapColorsWithRuntimeWeight('1000'),
  ['commandCenter.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['commandCenter.background']: colors.grayColors1000,
  ['commandCenter.activeBackground']: '',
  ['commandCenter.border']: mapColorsWithRuntimeWeight('400')
})

export default {
  commandCenterColors
}
