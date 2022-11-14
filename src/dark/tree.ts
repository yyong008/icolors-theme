import type Tree from '../types/Tree'

import { mapColorsWithRuntimeWeight } from '../designs/index'

const tree = (): Partial<Tree> => ({
  ['tree.indentGuidesStroke']: mapColorsWithRuntimeWeight('400'),
  ['tree.tableColumnsBorder']: '',
  ['tree.tableOddRowsBackground']: ''
})

export default {
  tree
}
