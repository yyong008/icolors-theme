import type { Scrollbar, ScrollbarSlider } from 'src/types/Scrollbar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const scrollbar = (): Partial<Scrollbar> => ({
  ['scrollbar.shadow']: ''
})

const scrollbarSlider = (): Partial<ScrollbarSlider> => ({
  ['scrollbarSlider.activeBackground']: mapColorsWithRuntimeWeight('100'),
  ['scrollbarSlider.background']: mapColorsWithRuntimeWeight('200'),
  ['scrollbarSlider.hoverBackground']: mapColorsWithRuntimeWeight('100')
})

export default {
  scrollbar,
  scrollbarSlider
}
