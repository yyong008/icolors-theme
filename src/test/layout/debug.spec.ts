import { setRuntimeColors } from '../../designs/index'
import de from '../../dark/debug'

describe('debugToolBar', () => {
  it('debugToolBar::length', () => {
    const debugToolBar = de.debugToolBar()

    expect(Object.keys(debugToolBar)).toHaveLength(2)
  })

  it('debugToolBar::blueColors', () => {
    setRuntimeColors('blueColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::goldColors', () => {
    setRuntimeColors('goldColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::greenColors', () => {
    setRuntimeColors('greenColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::limeColors', () => {
    setRuntimeColors('limeColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::redColors', () => {
    setRuntimeColors('redColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })

  it('debugToolBar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const debugToolBar = de.debugToolBar()

    expect(debugToolBar).toMatchInlineSnapshot(`
      {
        "debugToolBar.background": "#ff7875",
        "debugToolBar.border": "",
      }
    `)
  })
})

describe('debugView', () => {
  it('debugView::length', () => {
    const debugView = de.debugView()

    expect(Object.keys(debugView)).toHaveLength(5)
  })

  it('debugView::blueColors', () => {
    setRuntimeColors('blueColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::goldColors', () => {
    setRuntimeColors('goldColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::greenColors', () => {
    setRuntimeColors('greenColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::limeColors', () => {
    setRuntimeColors('limeColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::redColors', () => {
    setRuntimeColors('redColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })

  it('debugView::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const debugView = de.debugView()

    expect(debugView).toMatchInlineSnapshot(`
      {
        "debugView.exceptionLabelBackground": "",
        "debugView.exceptionLabelForeground": "",
        "debugView.stateLabelBackground": "",
        "debugView.stateLabelForeground": "",
        "debugView.valueChangedHighlight": "",
      }
    `)
  })
})

describe('debugTokenExpression', () => {
  it('debugTokenExpression::length', () => {
    const debugTokenExpression = de.debugTokenExpression()

    expect(Object.keys(debugTokenExpression)).toHaveLength(6)
  })

  it('debugTokenExpression::blueColors', () => {
    setRuntimeColors('blueColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::goldColors', () => {
    setRuntimeColors('goldColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::greenColors', () => {
    setRuntimeColors('greenColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::limeColors', () => {
    setRuntimeColors('limeColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::redColors', () => {
    setRuntimeColors('redColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })

  it('debugTokenExpression::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const debugTokenExpression = de.debugTokenExpression()

    expect(debugTokenExpression).toMatchInlineSnapshot(`
      {
        "debugTokenExpression.boolean": "",
        "debugTokenExpression.error": "",
        "debugTokenExpression.name": "",
        "debugTokenExpression.number": "",
        "debugTokenExpression.string": "",
        "debugTokenExpression.value": "",
      }
    `)
  })
})

describe('debugIcon', () => {
  it('debugIcon::length', () => {
    const debugIcon = de.debugIcon()

    expect(Object.keys(debugIcon)).toHaveLength(15)
  })

  it('debugIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::redColors', () => {
    setRuntimeColors('redColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })

  it('debugIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const debugIcon = de.debugIcon()

    expect(debugIcon).toMatchInlineSnapshot(`
      {
        "debugIcon.breakpointCurrentStackframeForeground": "",
        "debugIcon.breakpointDisabledForeground": "",
        "debugIcon.breakpointForeground": "",
        "debugIcon.breakpointStackframeForeground": "",
        "debugIcon.breakpointUnverifiedForeground": "",
        "debugIcon.continueForeground": "",
        "debugIcon.disconnectForeground": "",
        "debugIcon.pauseForeground": "",
        "debugIcon.restartForeground": "",
        "debugIcon.startForeground": "",
        "debugIcon.stepBackForeground": "",
        "debugIcon.stepIntoForeground": "",
        "debugIcon.stepOutForeground": "",
        "debugIcon.stepOverForeground": "",
        "debugIcon.stopForeground": "",
      }
    `)
  })
})

describe('DebugConsole', () => {
  it('DebugConsole::length', () => {
    const DebugConsole = de.DebugConsole()

    expect(Object.keys(DebugConsole)).toHaveLength(4)
  })

  it('DebugConsole::blueColors', () => {
    setRuntimeColors('blueColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::goldColors', () => {
    setRuntimeColors('goldColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::greenColors', () => {
    setRuntimeColors('greenColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::limeColors', () => {
    setRuntimeColors('limeColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::redColors', () => {
    setRuntimeColors('redColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })

  it('DebugConsole::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const DebugConsole = de.DebugConsole()

    expect(DebugConsole).toMatchInlineSnapshot(`
      {
        "debugConsole.errorForeground": "",
        "debugConsole.infoForeground": "",
        "debugConsole.sourceForeground": "",
        "debugConsole.warningForeground": "",
      }
    `)
  })
})

describe('debugConsoleInputIcon', () => {
  it('debugConsoleInputIcon::length', () => {
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(Object.keys(debugConsoleInputIcon)).toHaveLength(1)
  })

  it('debugConsoleInputIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::redColors', () => {
    setRuntimeColors('redColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })

  it('debugConsoleInputIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const debugConsoleInputIcon = de.debugConsoleInputIcon()

    expect(debugConsoleInputIcon).toMatchInlineSnapshot(`
      {
        "debugConsoleInputIcon.foreground": "",
      }
    `)
  })
})
