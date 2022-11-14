import type Testing from '../types/Testing'

import colors from '../designs/index'

const testing = (): Partial<Testing> => ({
  ['testing.iconFailed']: colors.redColors400,
  ['testing.iconErrored']: '',
  ['testing.iconPassed']: '',
  ['testing.runAction']: '',
  ['testing.iconQueued']: '',
  ['testing.iconUnset']: '',
  ['testing.iconSkipped']: '',
  ['testing.peekBorder']: '',
  ['testing.peekHeaderBackground']: '',
  ['testing.message.error.decorationForeground']: '',
  ['testing.message.error.lineBackground']: '',
  ['testing.message.info.decorationForeground']: '',
  ['testing.message.info.lineBackground']: ''
})

export default { testing }
