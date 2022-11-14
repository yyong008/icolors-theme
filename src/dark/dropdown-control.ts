import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

import type { Dropdown } from '../types/Dropdown'

const dropdown = (): Partial<Dropdown> => ({
  ['dropdown.listBackground']: colors.grayColors1000,
  // ['dropdown.listForeground']: colors.grayColors100,
  ['dropdown.background']: colors.grayColors1200,
  ['dropdown.border']: mapColorsWithRuntimeWeight('400'),
  ['dropdown.foreground']: colors.grayColors300
})

export default { dropdown }
