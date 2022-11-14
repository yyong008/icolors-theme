import { removeNullStrAttr } from '../utils/index'

const sprObjFromFn = async (path: string) => {
  const exportObj = await (await import(`${path}`)).default

  let returnObj = {}
  for (const objFn in exportObj) {
    if (typeof exportObj[objFn] === 'function') {
      returnObj = {
        ...returnObj,
        ...exportObj[objFn]()
      }
    }
  }

  return returnObj
}

export default async function createThemeColors() {
  const _colors = {
    ...(await sprObjFromFn('./action-colors')),
    ...(await sprObjFromFn('./activity-bar')),
    ...(await sprObjFromFn('./badge')),
    ...(await sprObjFromFn('./banner-colors')),
    ...(await sprObjFromFn('./breadcrumbs-colors')),
    ...(await sprObjFromFn('./base-colors')),
    ...(await sprObjFromFn('./button-control')),
    ...(await sprObjFromFn('./chart-colors')),
    ...(await sprObjFromFn('./command-center-colors')),
    ...(await sprObjFromFn('./constrast-colors')),
    ...(await sprObjFromFn('./debug')),
    ...(await sprObjFromFn('./diff-editor-colors')),
    ...(await sprObjFromFn('./dropdown-control')),
    ...(await sprObjFromFn('./editor')),
    ...(await sprObjFromFn('./extensions-colors')),
    ...(await sprObjFromFn('./git-colors')),
    ...(await sprObjFromFn('./input-control')),
    ...(await sprObjFromFn('./keybinding')),
    ...(await sprObjFromFn('./lists')),
    ...(await sprObjFromFn('./menu')),
    ...(await sprObjFromFn('./merge-conflicts-colors')),
    ...(await sprObjFromFn('./minimap')),
    ...(await sprObjFromFn('./notebook-colors')),
    ...(await sprObjFromFn('./notification-colors')),
    ...(await sprObjFromFn('./panel-colors')),
    ...(await sprObjFromFn('./peek-view-colors')),
    ...(await sprObjFromFn('./picker-group')),
    ...(await sprObjFromFn('./ports-colors')),
    ...(await sprObjFromFn('./progress-bar')),
    ...(await sprObjFromFn('./quick-input')),
    ...(await sprObjFromFn('./quick-picker-colors')),
    ...(await sprObjFromFn('./scrollbar-control')),
    ...(await sprObjFromFn('./selection')),
    ...(await sprObjFromFn('./settings')),
    ...(await sprObjFromFn('./side-bar')),
    ...(await sprObjFromFn('./source-control-color')),
    ...(await sprObjFromFn('./status-bar-colors')),
    ...(await sprObjFromFn('./symbol-icons-colors')),
    ...(await sprObjFromFn('./tab')),
    ...(await sprObjFromFn('./terminal')),
    ...(await sprObjFromFn('./testing-color')),
    ...(await sprObjFromFn('./tree')),
    ...(await sprObjFromFn('./welcome-page-colors')),
    ...(await sprObjFromFn('./widget')),
    ...(await sprObjFromFn('./window'))
  }

  return removeNullStrAttr(_colors)
}
