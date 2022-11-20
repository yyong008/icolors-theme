import type Badge from '../types/Badge.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const badge = (): Partial<Badge> => ({
  ['badge.background']: mapColorsWithRuntimeWeight('400'),
  ['badge.foreground']: colors.grayColors100
})

export default { badge }
