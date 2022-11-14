import type Window from '../types/window'

import { mapColorsWithRuntimeWeight } from '../designs/index'

const window = (): Partial<Window> => ({
  ['window.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['window.inactiveBorder']: mapColorsWithRuntimeWeight('400')
})

export default { window }
