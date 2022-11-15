import { setRuntimeColors } from '../../designs/index'
import cc from '../../dark/constrast-colors'

describe('ContrastColors', () => {
  it('ContrastColors::length', () => {
    const ContrastColors = cc.ContrastColors()

    expect(Object.keys(ContrastColors)).toHaveLength(2)
  })

  it('ContrastColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#002766",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#002329",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#030852",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#613400",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#092b00",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#254000",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#520339",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#612500",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#120338",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::redColors', () => {
    setRuntimeColors('redColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#5c0011",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#610b00",
        "contrastBorder": "",
      }
    `)
  })

  it('ContrastColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const ContrastColors = cc.ContrastColors()

    expect(ContrastColors).toMatchInlineSnapshot(`
      {
        "contrastActiveBorder": "#614700",
        "contrastBorder": "",
      }
    `)
  })
})
