import { setRuntimeColors } from '../../designs/index'
import ic from '../../dark/input-control'

describe('input', () => {
  it('input::length', () => {
    const input = ic.input()

    expect(Object.keys(input)).toHaveLength(3)
  })

  it('input::blueColors', () => {
    setRuntimeColors('blueColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#002766",
        "input.border": "#91d5ff",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#002329",
        "input.border": "#87e8de",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#030852",
        "input.border": "#adc6ff",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::goldColors', () => {
    setRuntimeColors('goldColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#613400",
        "input.border": "#ffe58f",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::greenColors', () => {
    setRuntimeColors('greenColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#092b00",
        "input.border": "#b7eb8f",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::limeColors', () => {
    setRuntimeColors('limeColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#254000",
        "input.border": "#eaff8f",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#520339",
        "input.border": "#ffadd2",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#612500",
        "input.border": "#ffd591",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#120338",
        "input.border": "#d3adf7",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::redColors', () => {
    setRuntimeColors('redColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#5c0011",
        "input.border": "#ffa39e",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#610b00",
        "input.border": "#ffbb96",
        "input.foreground": "#ffffff",
      }
    `)
  })

  it('input::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const input = ic.input()

    expect(input).toMatchInlineSnapshot(`
      {
        "input.background": "#614700",
        "input.border": "#fffb8f",
        "input.foreground": "#ffffff",
      }
    `)
  })
})

describe('inputOption', () => {
  it('inputOption::length', () => {
    const inputOption = ic.inputOption()

    expect(Object.keys(inputOption)).toHaveLength(1)
  })

  it('inputOption::blueColors', () => {
    setRuntimeColors('blueColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#40a9ff",
      }
    `)
  })

  it('inputOption::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#36cfc9",
      }
    `)
  })

  it('inputOption::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#597ef7",
      }
    `)
  })

  it('inputOption::goldColors', () => {
    setRuntimeColors('goldColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#ffc53d",
      }
    `)
  })

  it('inputOption::greenColors', () => {
    setRuntimeColors('greenColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#73d13d",
      }
    `)
  })

  it('inputOption::limeColors', () => {
    setRuntimeColors('limeColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#bae637",
      }
    `)
  })

  it('inputOption::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#f759ab",
      }
    `)
  })

  it('inputOption::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#ffa940",
      }
    `)
  })

  it('inputOption::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#9254de",
      }
    `)
  })

  it('inputOption::redColors', () => {
    setRuntimeColors('redColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#ff4d4f",
      }
    `)
  })

  it('inputOption::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#ff7a45",
      }
    `)
  })

  it('inputOption::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const inputOption = ic.inputOption()

    expect(inputOption).toMatchInlineSnapshot(`
      {
        "inputOption.activeBorder": "#ffec3d",
      }
    `)
  })
})

describe('inputValidation', () => {
  it('inputValidation::length', () => {
    const inputValidation = ic.inputValidation()

    expect(Object.keys(inputValidation)).toHaveLength(6)
  })

  it('inputValidation::blueColors', () => {
    setRuntimeColors('blueColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::goldColors', () => {
    setRuntimeColors('goldColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::greenColors', () => {
    setRuntimeColors('greenColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::limeColors', () => {
    setRuntimeColors('limeColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::redColors', () => {
    setRuntimeColors('redColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })

  it('inputValidation::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const inputValidation = ic.inputValidation()

    expect(inputValidation).toMatchInlineSnapshot(`
      {
        "inputValidation.errorBackground": "#90274A",
        "inputValidation.errorBorder": "#f92672",
        "inputValidation.infoBackground": "#546190",
        "inputValidation.infoBorder": "#819aff",
        "inputValidation.warningBackground": "#848528",
        "inputValidation.warningBorder": "#e2e22e",
      }
    `)
  })
})
