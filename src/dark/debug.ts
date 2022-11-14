import type {
  DebugToolBar,
  DebugView,
  DebugTokenExpression,
  DebugIcon,
  DebugConsole,
  DebugConsoleInputIcon
} from '../types/Debug'

import colors from '../designs/index'

const debugToolBar = (): Partial<DebugToolBar> => ({
  ['debugToolBar.background']: colors.redColors400,
  ['debugToolBar.border']: ''
})

const debugView = (): Partial<DebugView> => ({
  ['debugView.exceptionLabelForeground']: '',
  ['debugView.exceptionLabelBackground']: '',
  ['debugView.stateLabelForeground']: '',
  ['debugView.stateLabelBackground']: '',
  ['debugView.valueChangedHighlight']: ''
})

const debugTokenExpression = (): Partial<DebugTokenExpression> => ({
  ['debugTokenExpression.name']: '',
  ['debugTokenExpression.value']: '',
  ['debugTokenExpression.string']: '',
  ['debugTokenExpression.boolean']: '',
  ['debugTokenExpression.number']: '',
  ['debugTokenExpression.error']: ''
})

const debugIcon = (): Partial<DebugIcon> => ({
  ['debugIcon.breakpointForeground']: '',
  ['debugIcon.breakpointDisabledForeground']: '',
  ['debugIcon.breakpointUnverifiedForeground']: '',
  ['debugIcon.breakpointCurrentStackframeForeground']: '',
  ['debugIcon.breakpointStackframeForeground']: '',
  ['debugIcon.startForeground']: '',
  ['debugIcon.pauseForeground']: '',
  ['debugIcon.stopForeground']: '',
  ['debugIcon.disconnectForeground']: '',
  ['debugIcon.restartForeground']: '',
  ['debugIcon.stepOverForeground']: '',
  ['debugIcon.stepIntoForeground']: '',
  ['debugIcon.stepOutForeground']: '',
  ['debugIcon.continueForeground']: '',
  ['debugIcon.stepBackForeground']: ''
})

const DebugConsole = (): Partial<DebugConsole> => ({
  ['debugConsole.infoForeground']: '',
  ['debugConsole.warningForeground']: '',
  ['debugConsole.errorForeground']: '',
  ['debugConsole.sourceForeground']: ''
})

const debugConsoleInputIcon = (): Partial<DebugConsoleInputIcon> => ({
  ['debugConsoleInputIcon.foreground']: ''
})

export default {
  debugToolBar,
  debugView,
  debugTokenExpression,
  debugIcon,
  DebugConsole,
  debugConsoleInputIcon
}
