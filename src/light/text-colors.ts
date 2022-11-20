import type TextBlockQuote from '../types/TextBlockQuote.js'

import type {
  TextCodeBlock,
  TextLink,
  TextPreformat,
  TextSeparator
} from '../types/TextBlockQuote.js'

const textBlockQuote = (): Partial<TextBlockQuote> => ({
  ['textBlockQuote.background']: '',
  ['textBlockQuote.border']: ''
})

const textCodeBlock = (): Partial<TextCodeBlock> => ({
  ['textCodeBlock.background']: ''
})

const textLink = (): Partial<TextLink> => ({
  ['textLink.activeForeground']: '',
  ['textLink.foreground']: ''
})

const textPreformat = (): Partial<TextPreformat> => ({
  ['textPreformat.foreground']: ''
})

const textSeparator = (): Partial<TextSeparator> => ({
  ['textSeparator.foreground']: ''
})

export default {
  textBlockQuote,
  textCodeBlock,
  textLink,
  textPreformat,
  textSeparator
}
