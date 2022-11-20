import { setRuntimeColors } from '../../designs/index'
import tm from '../../dark/terminal'

describe('terminalColors', () => {
  it('terminalColors::length', () => {
    const terminalColors = tm.terminalColors()

    expect(Object.keys(terminalColors)).toHaveLength(16)
  })

  it('terminalColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::redColors', () => {
    setRuntimeColors('redColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })

  it('terminalColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const terminalColors = tm.terminalColors()

    expect(terminalColors).toMatchInlineSnapshot(`
      {
        "terminal.ansiBlack": "#333333",
        "terminal.ansiBlue": "#6A7EC8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#819aff",
        "terminal.ansiBrightCyan": "#66D9EF",
        "terminal.ansiBrightGreen": "#A6E22E",
        "terminal.ansiBrightMagenta": "#AE81FF",
        "terminal.ansiBrightRed": "#f92672",
        "terminal.ansiBrightWhite": "#f8f8f2",
        "terminal.ansiBrightYellow": "#e2e22e",
        "terminal.ansiCyan": "#56ADBC",
        "terminal.ansiGreen": "#86B42B",
        "terminal.ansiMagenta": "#8C6BC8",
        "terminal.ansiRed": "#C4265E",
        "terminal.ansiWhite": "#e3e3dd",
        "terminal.ansiYellow": "#B3B42B",
      }
    `)
  })
})
