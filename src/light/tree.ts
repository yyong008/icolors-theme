import type Tree from '../types/Tree.js'

import { mapColorsWithRuntimeWeight } from '../designs/index.js'

const tree = (): Partial<Tree> => ({
  ['tree.indentGuidesStroke']: mapColorsWithRuntimeWeight('400'),
  ['tree.tableColumnsBorder']: '',
  ['tree.tableOddRowsBackground']: ''
})

export default {
  tree
}
