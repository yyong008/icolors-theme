import type { Scrollbar, ScrollbarSlider } from 'src/types/Scrollbar'

const scrollbar = (): Partial<Scrollbar> => ({
  ['scrollbar.shadow']: ''
})

const scrollbarSlider = (): Partial<ScrollbarSlider> => ({
  ['scrollbarSlider.activeBackground']: '',
  ['scrollbarSlider.background']: '',
  ['scrollbarSlider.hoverBackground']: ''
})

export default {
  scrollbar,
  scrollbarSlider
}
