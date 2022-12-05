import type {
  Panel,
  PanelTitle,
  PanelInput,
  PanelSection,
  PanelSectionHeader
} from 'src/types/Panel'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const panel = (): Partial<Panel> => ({
  ['panel.background']: colors.grayColors200,
  ['panel.border']: colors.grayColors500,
  ['panel.dropBorder']: ''
})

const panelTitle = (): Partial<PanelTitle> => ({
  ['panelTitle.activeForeground']: mapColorsWithRuntimeWeight('400'),
  ['panelTitle.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['panelTitle.inactiveForeground']: '#75715E'
})

const panelInput = (): Partial<PanelInput> => ({
  ['panelInput.border']: mapColorsWithRuntimeWeight('400')
})

const panelSection = (): Partial<PanelSection> => ({
  ['panelSection.border']: '',
  ['panelSection.dropBackground']: ''
})

const panelSectionHeader = (): Partial<PanelSectionHeader> => ({
  ['panelSectionHeader.background']: '',
  ['panelSectionHeader.foreground']: '',
  ['panelSectionHeader.border']: colors.goldColors900
})

export default {
  panel,
  panelTitle,
  panelInput,
  panelSection,
  panelSectionHeader
}
