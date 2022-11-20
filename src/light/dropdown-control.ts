import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

import type { Dropdown } from '../types/Dropdown.js'

const dropdown = (): Partial<Dropdown> => ({
  ['dropdown.listBackground']: colors.grayColors1000,
  ['dropdown.background']: colors.grayColors1200,
  ['dropdown.border']: mapColorsWithRuntimeWeight('400'),
  ['dropdown.foreground']: colors.grayColors1100
})

export default { dropdown }
