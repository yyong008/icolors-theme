import { colors } from 'src/designs/systemColor.js'
import type Selection from '../types/Selection.js'

const selection = (): Partial<Selection> => ({
  ['selection.background']: colors.grayColors900
})

export default { selection }
