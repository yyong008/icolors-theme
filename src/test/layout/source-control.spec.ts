import { setRuntimeColors } from '../../designs/index'
import sc from '../../dark/source-control-color'

describe('scm', () => {
  it('scm::length', () => {
    const scm = sc.scm()

    expect(Object.keys(scm)).toHaveLength(1)
  })

  it('scm::blueColors', () => {
    setRuntimeColors('blueColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::goldColors', () => {
    setRuntimeColors('goldColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::greenColors', () => {
    setRuntimeColors('greenColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::limeColors', () => {
    setRuntimeColors('limeColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::redColors', () => {
    setRuntimeColors('redColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })

  it('scm::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const scm = sc.scm()

    expect(scm).toMatchInlineSnapshot(`
      {
        "scm.providerBorder": "",
      }
    `)
  })
})
