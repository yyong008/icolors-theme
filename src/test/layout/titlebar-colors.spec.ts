import { setRuntimeColors } from '../../designs/index'
import tb from '../../dark/title-bar-colors'

describe('titleBar', () => {
  it('titleBar::length', () => {
    const titleBar = tb.titleBar()

    expect(Object.keys(titleBar)).toHaveLength(5)
  })

  it('titleBar::blueColors', () => {
    setRuntimeColors('blueColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#40a9ff",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#096dd9",
      }
    `)
  })

  it('titleBar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#36cfc9",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#08979c",
      }
    `)
  })

  it('titleBar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#597ef7",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#1d39c4",
      }
    `)
  })

  it('titleBar::goldColors', () => {
    setRuntimeColors('goldColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#ffc53d",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#d48806",
      }
    `)
  })

  it('titleBar::greenColors', () => {
    setRuntimeColors('greenColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#73d13d",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#389e0d",
      }
    `)
  })

  it('titleBar::limeColors', () => {
    setRuntimeColors('limeColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#bae637",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#7cb305",
      }
    `)
  })

  it('titleBar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#f759ab",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#c41d7f",
      }
    `)
  })

  it('titleBar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#ffa940",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#d46b08",
      }
    `)
  })

  it('titleBar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#9254de",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#531dab",
      }
    `)
  })

  it('titleBar::redColors', () => {
    setRuntimeColors('redColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#ff4d4f",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#cf1322",
      }
    `)
  })

  it('titleBar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#ff7a45",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#d4380d",
      }
    `)
  })

  it('titleBar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const titleBar = tb.titleBar()

    expect(titleBar).toMatchInlineSnapshot(`
      {
        "titleBar.activeBackground": "#262626",
        "titleBar.activeForeground": "#ffec3d",
        "titleBar.border": "#434343",
        "titleBar.inactiveBackground": "#262626",
        "titleBar.inactiveForeground": "#d4b106",
      }
    `)
  })
})
