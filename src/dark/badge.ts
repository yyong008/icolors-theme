import type Badge from '../types/Badge'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const badge = (): Partial<Badge> => ({
  ['badge.background']: mapColorsWithRuntimeWeight('400'),
  ['badge.foreground']: colors.grayColors100
})

export default { badge }
