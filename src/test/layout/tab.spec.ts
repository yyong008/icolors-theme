import { setRuntimeColors } from '../../designs/index'
import tb from '../../dark/tab'

describe('tab', () => {
  it('tab::length', () => {
    const tab = tb.tab()

    expect(Object.keys(tab)).toHaveLength(24)
  })

  it('tab::blueColors', () => {
    setRuntimeColors('blueColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#69c0ff",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#5cdbd3",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#85a5ff",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::goldColors', () => {
    setRuntimeColors('goldColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#ffd666",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::greenColors', () => {
    setRuntimeColors('greenColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#95de64",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::limeColors', () => {
    setRuntimeColors('limeColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#d3f261",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#ff85c0",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#ffc069",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#b37feb",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::redColors', () => {
    setRuntimeColors('redColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#ff7875",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#ff9c6e",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })

  it('tab::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const tab = tb.tab()

    expect(tab).toMatchInlineSnapshot(`
      {
        "tab.activeBackground": "#1f1f1f",
        "tab.activeBorder": "",
        "tab.activeBorderTop": "#fff566",
        "tab.activeForeground": "#ffffff",
        "tab.activeModifiedBorder": "#434343",
        "tab.border": "#434343",
        "tab.hoverBackground": "#262626",
        "tab.hoverBorder": "#434343",
        "tab.hoverForeground": "",
        "tab.inactiveBackground": "#262626",
        "tab.inactiveForeground": "#bfbfbf",
        "tab.inactiveModifiedBorder": "#434343",
        "tab.lastPinnedBorder": "#434343",
        "tab.unfocusedActiveBackground": "",
        "tab.unfocusedActiveBorder": "#434343",
        "tab.unfocusedActiveBorderTop": "#434343",
        "tab.unfocusedActiveForeground": "",
        "tab.unfocusedActiveModifiedBorder": "#434343",
        "tab.unfocusedHoverBackground": "",
        "tab.unfocusedHoverBorder": "#434343",
        "tab.unfocusedHoverForeground": "",
        "tab.unfocusedInactiveBackground": "",
        "tab.unfocusedInactiveForeground": "",
        "tab.unfocusedInactiveModifiedBorder": "#434343",
      }
    `)
  })
})
