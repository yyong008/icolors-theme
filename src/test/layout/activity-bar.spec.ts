// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import ab from '../../dark/activity-bar'

describe('activity-bar', () => {
  it('activity-bar::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#69c0ff",
      }
    `)
  })

  it('activity-bar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#5cdbd3",
      }
    `)
  })

  it('activity-bar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#85a5ff",
      }
    `)
  })

  it('activity-bar::goldColors', () => {
    setRuntimeColors('goldColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#ffd666",
      }
    `)
  })

  it('activity-bar::greenColors', () => {
    setRuntimeColors('greenColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#95de64",
      }
    `)
  })

  it('activity-bar::limeColors', () => {
    setRuntimeColors('limeColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#d3f261",
      }
    `)
  })

  it('activity-bar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#ff85c0",
      }
    `)
  })

  it('activity-bar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#ffc069",
      }
    `)
  })

  it('activity-bar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#b37feb",
      }
    `)
  })

  it('activity-bar::redColors', () => {
    setRuntimeColors('redColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#ff7875",
      }
    `)
  })

  it('activity-bar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#ff9c6e",
      }
    `)
  })

  it('activity-bar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const activityBar = ab.activityBar()

    expect(Object.keys(activityBar)).toHaveLength(2)
    expect(activityBar).toMatchInlineSnapshot(`
      {
        "activityBar.background": "#1f1f1f",
        "activityBar.foreground": "#fff566",
      }
    `)
  })
})

describe('activity-bar-badge', () => {
  it('activity-bar-badge::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBarBadge = ab.activityBarBadge()

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
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

    expect(Object.keys(activityBarBadge)).toHaveLength(2)
    expect(activityBarBadge).toMatchInlineSnapshot(`
      {
        "activityBarBadge.background": "#fadb14",
        "activityBarBadge.foreground": "#ffffff",
      }
    `)
  })
})

describe('activity-bar-item', () => {
  it('activity-bar-item::blueColors', () => {
    setRuntimeColors('blueColors')
    const activityBarItem = ab.activityBarItem()

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
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

    expect(Object.keys(activityBarItem)).toHaveLength(3)
    expect(activityBarItem).toMatchInlineSnapshot(`
      {
        "activityBarItem.settingsProfilesBackground": "",
        "activityBarItem.settingsProfilesForeground": "",
        "activityBarItem.settingsProfilesHoverForeground": "",
      }
    `)
  })
})
