import type Window from '../types/window.js'

import { mapColorsWithRuntimeWeight } from '../designs/index.js'

const window = (): Partial<Window> => ({
  ['window.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['window.inactiveBorder']: mapColorsWithRuntimeWeight('400')
})

export default { window }
