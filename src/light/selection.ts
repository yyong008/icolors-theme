import colors from 'src/designs/index'
import type Selection from '../types/Selection'

const selection = (): Partial<Selection> => ({
  ['selection.background']: colors.redColors400
})

export default { selection }
