import { setRuntimeColors } from '../../designs/index'
import sb from '../../dark/status-bar-colors'

describe('statusBarColors', () => {
  it('statusBarColors::length', () => {
    const statusBarColors = sb.statusBarColors()

    expect(Object.keys(statusBarColors)).toHaveLength(2)
  })

  it('statusBarColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#40a9ff",
      }
    `)
  })

  it('statusBarColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#36cfc9",
      }
    `)
  })

  it('statusBarColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#597ef7",
      }
    `)
  })

  it('statusBarColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#ffc53d",
      }
    `)
  })

  it('statusBarColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#73d13d",
      }
    `)
  })

  it('statusBarColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#bae637",
      }
    `)
  })

  it('statusBarColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#f759ab",
      }
    `)
  })

  it('statusBarColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#ffa940",
      }
    `)
  })

  it('statusBarColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#9254de",
      }
    `)
  })

  it('statusBarColors::redColors', () => {
    setRuntimeColors('redColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#ff4d4f",
      }
    `)
  })

  it('statusBarColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#ff7a45",
      }
    `)
  })

  it('statusBarColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const statusBarColors = sb.statusBarColors()

    expect(statusBarColors).toMatchInlineSnapshot(`
      {
        "statusBar.background": "#434343",
        "statusBar.foreground": "#ffec3d",
      }
    `)
  })
})

describe('statusBarItemColors', () => {
  it('statusBarItemColors::length', () => {
    const statusBarItemColors = sb.statusBarItemColors()

    expect(Object.keys(statusBarItemColors)).toHaveLength(13)
  })

  it('statusBarItemColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#002766",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#40a9ff",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#40a9ff",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#002329",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#36cfc9",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#36cfc9",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#030852",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#597ef7",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#597ef7",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#613400",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#ffc53d",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#ffc53d",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#092b00",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#73d13d",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#73d13d",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#254000",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#bae637",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#bae637",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#520339",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#f759ab",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#f759ab",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#612500",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#ffa940",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#ffa940",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#120338",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#9254de",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#9254de",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::redColors', () => {
    setRuntimeColors('redColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#5c0011",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#ff4d4f",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#ff4d4f",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#610b00",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#ff7a45",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#ff7a45",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })

  it('statusBarItemColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const statusBarItemColors = sb.statusBarItemColors()

    expect(statusBarItemColors).toMatchInlineSnapshot(`
      {
        "statusBarItem.activeBackground": "#614700",
        "statusBarItem.compactHoverBackground": "#08979c",
        "statusBarItem.errorBackground": "#cf1322",
        "statusBarItem.errorForeground": "#ffffff",
        "statusBarItem.focusBorder": "#ffffff",
        "statusBarItem.hoverBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#141414",
        "statusBarItem.prominentForeground": "#ffec3d",
        "statusBarItem.prominentHoverBackground": "#1f1f1f",
        "statusBarItem.remoteBackground": "#262626",
        "statusBarItem.remoteForeground": "#ffec3d",
        "statusBarItem.warningBackground": "#d4b106",
        "statusBarItem.warningForeground": "#ffffff",
      }
    `)
  })
})
