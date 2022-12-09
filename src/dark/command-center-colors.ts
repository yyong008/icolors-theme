import CommandCenter from 'src/types/CommandCenter'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const commandCenterColors = (): Partial<CommandCenter> => ({
  ['commandCenter.foreground']: mapColorsWithRuntimeWeight('500'),
  ['commandCenter.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['commandCenter.background']: colors.grayColors1000,
  ['commandCenter.activeBackground']: '',
  ['commandCenter.border']: mapColorsWithRuntimeWeight('600'),
  ['commandCenter.inactiveForeground']: mapColorsWithRuntimeWeight('600'),
  ['commandCenter.inactiveBorder']: mapColorsWithRuntimeWeight('500')
})

export default {
  commandCenterColors
}
