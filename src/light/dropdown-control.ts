import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

import type { Dropdown } from '../types/Dropdown.js'

const dropdown = (): Partial<Dropdown> => ({
  ['dropdown.listBackground']: colors.grayColors300,
  ['dropdown.background']: colors.grayColors300,
  ['dropdown.border']: mapColorsWithRuntimeWeight('400'),
  ['dropdown.foreground']: colors.grayColors1100
})

export default { dropdown }
