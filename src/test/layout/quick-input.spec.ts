import { setRuntimeColors } from '../../designs/index'
import qi from '../../dark/quick-picker-colors'

describe('pickerGroup', () => {
  it('pickerGroup::length', () => {
    const pickerGroup = qi.pickerGroup()

    expect(Object.keys(pickerGroup)).toHaveLength(2)
  })

  it('pickerGroup::blueColors', () => {
    setRuntimeColors('blueColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::goldColors', () => {
    setRuntimeColors('goldColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::greenColors', () => {
    setRuntimeColors('greenColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::limeColors', () => {
    setRuntimeColors('limeColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::redColors', () => {
    setRuntimeColors('redColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })

  it('pickerGroup::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const pickerGroup = qi.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "quickInput.background": "",
        "quickInput.foreground": "",
      }
    `)
  })
})
