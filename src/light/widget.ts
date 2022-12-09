import type Widget from '../types/widget'

import { mapColorsWithRuntimeWeight } from 'src/designs/index'

const widget = (): Partial<Widget> => ({
  ['widget.shadow']: mapColorsWithRuntimeWeight('200')
})

export default { widget }
