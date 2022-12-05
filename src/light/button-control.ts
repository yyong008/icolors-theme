import type Button from 'src/types/Button'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const button = (): Partial<Button> => ({
  ['button.background']: mapColorsWithRuntimeWeight('600'),
  ['button.foreground']: colors.grayColors100,
  ['button.border']: '',
  ['button.separator']: '',
  ['button.hoverBackground']: '',
  ['button.secondaryForeground']: '',
  ['button.secondaryBackground']: mapColorsWithRuntimeWeight('500'),
  ['button.secondaryHoverBackground']: ''
})

export default {
  button
}
