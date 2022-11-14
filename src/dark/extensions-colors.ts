import type {
  ExtensionButton,
  ExtensionBadge,
  ExtensionIcon
} from '../types/Extension'

import { mapColorsWithRuntimeWeight } from '../designs/index'

const extensionButton = (): Partial<ExtensionButton> => ({
  ['extensionButton.prominentForeground']: mapColorsWithRuntimeWeight('900'),
  ['extensionButton.prominentBackground']: mapColorsWithRuntimeWeight('400'),
  ['extensionButton.prominentHoverBackground']: ''
})

const extensionBadge = (): Partial<ExtensionBadge> => ({
  ['extensionBadge.remoteBackground']: '',
  ['extensionBadge.remoteForeground']: ''
})

const extensionIcon = (): Partial<ExtensionIcon> => ({
  ['extensionIcon.starForeground']: '',
  ['extensionIcon.verifiedForeground']: '',
  ['extensionIcon.preReleaseForeground']: '',
  ['extensionIcon.sponsorForeground']: ''
})

export default {
  extensionButton,
  extensionBadge,
  extensionIcon
}
