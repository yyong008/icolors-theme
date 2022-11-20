import { setRuntimeColors } from '../../designs/index'
import st from '../../dark/selection'

describe('selection', () => {
  it('selection::length', () => {
    const selection = st.selection()

    expect(Object.keys(selection)).toHaveLength(1)
  })

  it('selection::blueColors', () => {
    setRuntimeColors('blueColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::goldColors', () => {
    setRuntimeColors('goldColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::greenColors', () => {
    setRuntimeColors('greenColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::limeColors', () => {
    setRuntimeColors('limeColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::redColors', () => {
    setRuntimeColors('redColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })

  it('selection::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const selection = st.selection()

    expect(selection).toMatchInlineSnapshot(`
      {
        "selection.background": "#878b9180",
      }
    `)
  })
})
