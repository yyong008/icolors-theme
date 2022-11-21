import colors, { mapColorsWithRuntimeWeight } from 'src/designs/index.js'
import type Widget from '../types/widget.js'

const widget = (): Partial<Widget> => ({
  ['widget.shadow']: colors.grayColors400
})

export default { widget }
