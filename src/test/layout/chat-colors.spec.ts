import { setRuntimeColors } from '../../designs/index'
import cc from '../../dark/chart-colors'

describe('charts', () => {
  it('charts::length', () => {
    const charts = cc.charts()

    expect(Object.keys(charts)).toHaveLength(8)
  })

  it('charts::blueColors', () => {
    setRuntimeColors('blueColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::goldColors', () => {
    setRuntimeColors('goldColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::greenColors', () => {
    setRuntimeColors('greenColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::limeColors', () => {
    setRuntimeColors('limeColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::redColors', () => {
    setRuntimeColors('redColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })

  it('charts::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const charts = cc.charts()

    expect(charts).toMatchInlineSnapshot(`
      {
        "charts.blue": "",
        "charts.foreground": "#ff7875",
        "charts.green": "",
        "charts.lines": "",
        "charts.orange": "",
        "charts.purple": "",
        "charts.red": "",
        "charts.yellow": "",
      }
    `)
  })
})
