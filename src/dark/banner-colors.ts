import type Banner from '../types/Banner'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const banner = (): Partial<Banner> => ({
  'banner.background': colors.redColors400,
  'banner.foreground': mapColorsWithRuntimeWeight('400'),
  'banner.iconForeground': colors.redColors500
})

export default { banner }
