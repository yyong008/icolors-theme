import type {
  Panel,
  PanelTitle,
  PanelInput,
  PanelSection,
  PanelSectionHeader
} from 'src/types/Panel'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const panel = (): Partial<Panel> => ({
  ['panel.background']: colors.grayColors1000,
  ['panel.border']: mapColorsWithRuntimeWeight('400'),
  ['panel.dropBorder']: ''
})

const panelTitle = (): Partial<PanelTitle> => ({
  ['panelTitle.activeForeground']: mapColorsWithRuntimeWeight('400'),
  ['panelTitle.activeBorder']: mapColorsWithRuntimeWeight('400'),
  ['panelTitle.inactiveForeground']: '#75715E'
})

const panelInput = (): Partial<PanelInput> => ({
  ['panelInput.border']: ''
})

const panelSection = (): Partial<PanelSection> => ({
  ['panelSection.border']: '',
  ['panelSection.dropBackground']: ''
})

const panelSectionHeader = (): Partial<PanelSectionHeader> => ({
  ['panelSectionHeader.background']: '',
  ['panelSectionHeader.foreground']: '',
  ['panelSectionHeader.border']: ''
})

export default {
  panel,
  panelTitle,
  panelInput,
  panelSection,
  panelSectionHeader
}
