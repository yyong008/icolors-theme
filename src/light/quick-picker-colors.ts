import type { QuickInput } from 'src/types/QuickInput'

const pickerGroup = (): Partial<QuickInput> => ({
  ['quickInput.background']: '',
  ['quickInput.foreground']: ''
})

export default {
  pickerGroup
}
