import type Button from 'src/types/Button'

import { mapColors, getRuntimeColors } from '../designs/index'

const button = (): Partial<Button> => ({
  ['button.background']: `${mapColors(`${getRuntimeColors()}700`)}`,
  ['button.foreground']: '',
  ['button.border']: '',
  ['button.separator']: '',
  ['button.hoverBackground']: '',
  ['button.secondaryForeground']: '',
  ['button.secondaryBackground']: '',
  ['button.secondaryHoverBackground']: ''
})

export default {
  button
}
