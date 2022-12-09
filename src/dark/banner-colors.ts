import type Banner from '../types/Banner'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const banner = (): Partial<Banner> => ({
  'banner.background': '',
  'banner.foreground': '',
  'banner.iconForeground': ''
})

export default { banner }
