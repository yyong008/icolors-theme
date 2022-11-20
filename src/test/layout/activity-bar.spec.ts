// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import ab from '../../dark/activity-bar'

describe('activity-bar', () => {
  it('activity-bar::length', () => {
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(5)
  })
  it('activity-bar::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#91d5ff",
        "activityBar.inactiveForeground": "#0050b3",
      }
    `)
  })

  it('activity-bar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#87e8de",
        "activityBar.inactiveForeground": "#006d75",
      }
    `)
  })

  it('activity-bar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#adc6ff",
        "activityBar.inactiveForeground": "#10239e",
      }
    `)
  })

  it('activity-bar::goldColors', () => {
    setRuntimeColors('goldColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#ffe58f",
        "activityBar.inactiveForeground": "#ad6800",
      }
    `)
  })

  it('activity-bar::greenColors', () => {
    setRuntimeColors('greenColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#b7eb8f",
        "activityBar.inactiveForeground": "#237804",
      }
    `)
  })

  it('activity-bar::limeColors', () => {
    setRuntimeColors('limeColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#eaff8f",
        "activityBar.inactiveForeground": "#5b8c00",
      }
    `)
  })

  it('activity-bar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#ffadd2",
        "activityBar.inactiveForeground": "#9e1068",
      }
    `)
  })

  it('activity-bar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#ffd591",
        "activityBar.inactiveForeground": "#ad4e00",
      }
    `)
  })

  it('activity-bar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#d3adf7",
        "activityBar.inactiveForeground": "#391085",
      }
    `)
  })

  it('activity-bar::redColors', () => {
    setRuntimeColors('redColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#ffa39e",
        "activityBar.inactiveForeground": "#a8071a",
      }
    `)
  })

  it('activity-bar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#ffbb96",
        "activityBar.inactiveForeground": "#ad2102",
      }
    `)
  })

  it('activity-bar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const activityBar = ab.activityBar()

    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.border": "#434343",
        "activityBar.dropBorder": "",
        "activityBar.foreground": "#fffb8f",
        "activityBar.inactiveForeground": "#ad8b00",
      }
    `)
  })
})

describe('activity-bar-badge', () => {
  it('activity-bar-badge::length', () => {
    const activityBarBadge = ab.activityBarBadge()

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
  })

  it('activity-bar-badge::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#1890ff",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#13c2c2",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#2f54eb",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::goldColors', () => {
    setRuntimeColors('goldColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#faad14",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::greenColors', () => {
    setRuntimeColors('greenColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#52c41a",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::limeColors', () => {
    setRuntimeColors('limeColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#a0d911",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#eb2f96",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#fa8c16",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#722ed1",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::redColors', () => {
    setRuntimeColors('redColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#f5222d",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#fa541c",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })

  it('activity-bar-badge::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#fadb14",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })
})

describe('activity-bar-item', () => {
  it('activity-bar-item::length', () => {
    const activityBarItem = ab.activityBarItem()

    expect(Object.keys(activityBarItem)).toHaveLength(3)
  })
  it('activity-bar-item::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::goldColors', () => {
    setRuntimeColors('goldColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::greenColors', () => {
    setRuntimeColors('greenColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::limeColors', () => {
    setRuntimeColors('limeColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::redColors', () => {
    setRuntimeColors('redColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })

  it('activity-bar-item::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const activityBarItem = ab.activityBarItem()

    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })
})
