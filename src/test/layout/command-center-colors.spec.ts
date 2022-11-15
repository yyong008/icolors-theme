import { setRuntimeColors } from '../../designs/index'
import ccc from '../../dark/command-center-colors'

describe('commandCenterColors', () => {
  it('commandCenterColors::length', () => {
    const commandCenterColors = ccc.commandCenterColors()

    expect(Object.keys(commandCenterColors)).toHaveLength(5)
  })

  it('commandCenterColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#40a9ff",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#69c0ff",
        "commandCenter.foreground": "#e6f7ff",
      }
    `)
  })

  it('commandCenterColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#36cfc9",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#5cdbd3",
        "commandCenter.foreground": "#e6fffb",
      }
    `)
  })

  it('commandCenterColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#597ef7",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#85a5ff",
        "commandCenter.foreground": "#f0f5ff",
      }
    `)
  })

  it('commandCenterColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#ffc53d",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#ffd666",
        "commandCenter.foreground": "#fffbe6",
      }
    `)
  })

  it('commandCenterColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#73d13d",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#95de64",
        "commandCenter.foreground": "#f6ffed",
      }
    `)
  })

  it('commandCenterColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#bae637",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#d3f261",
        "commandCenter.foreground": "#fcffe6",
      }
    `)
  })

  it('commandCenterColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#f759ab",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#ff85c0",
        "commandCenter.foreground": "#fff0f6",
      }
    `)
  })

  it('commandCenterColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#ffa940",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#ffc069",
        "commandCenter.foreground": "#fff7e6",
      }
    `)
  })

  it('commandCenterColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#9254de",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#b37feb",
        "commandCenter.foreground": "#f9f0ff",
      }
    `)
  })

  it('commandCenterColors::redColors', () => {
    setRuntimeColors('redColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#ff4d4f",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#ff7875",
        "commandCenter.foreground": "#fff1f0",
      }
    `)
  })

  it('commandCenterColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#ff7a45",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#ff9c6e",
        "commandCenter.foreground": "#fff2e8",
      }
    `)
  })

  it('commandCenterColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const commandCenterColors = ccc.commandCenterColors()

    expect(commandCenterColors).toMatchInlineSnapshot(`
      {
        "commandCenter.activeBackground": "",
        "commandCenter.activeForeground": "#ffec3d",
        "commandCenter.background": "#262626",
        "commandCenter.border": "#fff566",
        "commandCenter.foreground": "#feffe6",
      }
    `)
  })
})
