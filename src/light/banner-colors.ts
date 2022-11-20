import type Banner from '../types/Banner.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const banner = (): Partial<Banner> => ({
  'banner.background': colors.redColors400,
  'banner.foreground': mapColorsWithRuntimeWeight('400'),
  'banner.iconForeground': colors.redColors500
})

export default { banner }
