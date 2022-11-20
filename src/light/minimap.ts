import { Minimap, MinimapSlider, MinimapGutter } from 'src/types/Minimap'

const minimap = (): Partial<Minimap> => ({
  ['minimap.selectionHighlight']: '#878b9180'
})

const minimapGutter = (): Partial<MinimapGutter> => ({
  ['minimapGutter.background']: '',
  ['minimapGutter.hoverBackground']: '',
  ['minimapGutter.activeBackground']: ''
})

const minimapSlider = (): Partial<MinimapSlider> => ({
  ['minimapSlider.addedBackground']: '',
  ['minimapSlider.modifiedBackground']: '',
  ['minimapSlider.deletedBackground']: ''
})

export default { minimap, minimapSlider, minimapGutter }
