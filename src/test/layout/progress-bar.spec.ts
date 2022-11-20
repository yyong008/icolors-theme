import { setRuntimeColors } from '../../designs/index'
import pb from '../../dark/progress-bar'

describe('progressBar', () => {
  it('progressBar::length', () => {
    const progressBar = pb.progressBar()

    expect(Object.keys(progressBar)).toHaveLength(1)
  })

  it('progressBar::blueColors', () => {
    setRuntimeColors('blueColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::goldColors', () => {
    setRuntimeColors('goldColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::greenColors', () => {
    setRuntimeColors('greenColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::limeColors', () => {
    setRuntimeColors('limeColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::redColors', () => {
    setRuntimeColors('redColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })

  it('progressBar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const progressBar = pb.progressBar()

    expect(progressBar).toMatchInlineSnapshot(`
      {
        "progressBar.background": "#75715E",
      }
    `)
  })
})
