import { setRuntimeColors } from '../../designs/index'
import wg from '../../dark/widget'

describe('widget', () => {
  it('widget::length', () => {
    const widget = wg.widget()

    expect(Object.keys(widget)).toHaveLength(1)
  })

  it('widget::blueColors', () => {
    setRuntimeColors('blueColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::goldColors', () => {
    setRuntimeColors('goldColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::greenColors', () => {
    setRuntimeColors('greenColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::limeColors', () => {
    setRuntimeColors('limeColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::redColors', () => {
    setRuntimeColors('redColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })

  it('widget::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const widget = wg.widget()

    expect(widget).toMatchInlineSnapshot(`
      {
        "widget.shadow": "#00000098",
      }
    `)
  })
})
