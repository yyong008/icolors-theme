import { setRuntimeColors } from '../../designs/index'
import bt from '../../dark/button-control'

describe('buttons', () => {
  it('buttons::length', () => {
    const button = bt.button()

    expect(Object.keys(button)).toHaveLength(8)
  })

  it('buttons::blueColors', () => {
    setRuntimeColors('blueColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#096dd9",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#1890ff",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#08979c",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#13c2c2",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#1d39c4",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#2f54eb",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::goldColors', () => {
    setRuntimeColors('goldColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#d48806",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#faad14",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::greenColors', () => {
    setRuntimeColors('greenColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#389e0d",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#52c41a",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::limeColors', () => {
    setRuntimeColors('limeColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#7cb305",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#a0d911",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#c41d7f",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#eb2f96",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#d46b08",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#fa8c16",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#531dab",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#722ed1",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::redColors', () => {
    setRuntimeColors('redColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#cf1322",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#f5222d",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#d4380d",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#fa541c",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })

  it('buttons::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const buttons = bt.button()

    expect(buttons).toMatchInlineSnapshot(`
      {
        "button.background": "#d4b106",
        "button.border": "",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "",
        "button.secondaryBackground": "#fadb14",
        "button.secondaryForeground": "",
        "button.secondaryHoverBackground": "",
        "button.separator": "",
      }
    `)
  })
})
