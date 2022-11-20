import type { Input, InputOption, InputValidation } from '../types/Input.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const input = (): Partial<Input> => ({
  ['input.foreground']: colors.grayColors100,
  ['input.background']: mapColorsWithRuntimeWeight('1000'),
  ['input.border']: mapColorsWithRuntimeWeight('300')
})

const inputOption = (): Partial<InputOption> => ({
  ['inputOption.activeBorder']: mapColorsWithRuntimeWeight('500')
})

const inputValidation = (): Partial<InputValidation> => ({
  ['inputValidation.errorBackground']: '#90274A', // middle of #272822 and #f92672
  ['inputValidation.errorBorder']: '#f92672',
  ['inputValidation.warningBackground']: '#848528', // middle of #272822 and #e2e22e
  ['inputValidation.warningBorder']: '#e2e22e',
  ['inputValidation.infoBackground']: '#546190', // middle of #272822 and #819aff
  ['inputValidation.infoBorder']: '#819aff'
})

export default { input, inputOption, inputValidation }
