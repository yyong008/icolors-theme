import type CommandCenter from 'src/types/CommandCenter'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const commandCenterColors = (): Partial<CommandCenter> => ({
  ['commandCenter.foreground']: mapColorsWithRuntimeWeight('600'),
  ['commandCenter.activeForeground']: mapColorsWithRuntimeWeight('800'),
  ['commandCenter.background']: mapColorsWithRuntimeWeight('100'),
  ['commandCenter.activeBackground']: colors.grayColors300,
  ['commandCenter.border']: mapColorsWithRuntimeWeight('500'),
  ['commandCenter.inactiveForeground']: mapColorsWithRuntimeWeight('600'),
  ['commandCenter.inactiveBorder']: mapColorsWithRuntimeWeight('500')
})

export default {
  commandCenterColors
}
