import type Breadcrumb from 'src/types/Breadcrumb'
import type { BreadcrumbPicker } from 'src/types/Breadcrumb'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const breadbrumbs = (): Partial<Breadcrumb> => ({
  ['breadcrumb.foreground']: colors.grayColors1100,
  ['breadcrumb.background']: colors.grayColors300,
  ['breadcrumb.focusForeground']: mapColorsWithRuntimeWeight('400'),
  ['breadcrumb.activeSelectionForeground']: mapColorsWithRuntimeWeight('400')
})

const breadcrumbPicker = (): Partial<BreadcrumbPicker> => ({
  ['breadcrumbPicker.background']: colors.grayColors300
})

export default {
  breadbrumbs,
  breadcrumbPicker
}
