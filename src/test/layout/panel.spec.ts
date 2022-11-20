import { setRuntimeColors } from '../../designs/index'
import pc from '../../dark/panel-colors'

describe('panel', () => {
  it('panel::length', () => {
    const panel = pc.panel()

    expect(Object.keys(panel)).toHaveLength(3)
  })

  it('panel::blueColors', () => {
    setRuntimeColors('blueColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#69c0ff",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#5cdbd3",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#85a5ff",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::goldColors', () => {
    setRuntimeColors('goldColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#ffd666",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::greenColors', () => {
    setRuntimeColors('greenColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#95de64",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::limeColors', () => {
    setRuntimeColors('limeColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#d3f261",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#ff85c0",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#ffc069",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#b37feb",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::redColors', () => {
    setRuntimeColors('redColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#ff7875",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#ff9c6e",
        "panel.dropBorder": "",
      }
    `)
  })

  it('panel::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const panel = pc.panel()

    expect(panel).toMatchInlineSnapshot(`
      {
        "panel.background": "#262626",
        "panel.border": "#fff566",
        "panel.dropBorder": "",
      }
    `)
  })
})

describe('panelTitle', () => {
  it('panelTitle::length', () => {
    const panelTitle = pc.panelTitle()

    expect(Object.keys(panelTitle)).toHaveLength(3)
  })

  it('panelTitle::blueColors', () => {
    setRuntimeColors('blueColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#69c0ff",
        "panelTitle.activeForeground": "#69c0ff",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#5cdbd3",
        "panelTitle.activeForeground": "#5cdbd3",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#85a5ff",
        "panelTitle.activeForeground": "#85a5ff",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::goldColors', () => {
    setRuntimeColors('goldColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#ffd666",
        "panelTitle.activeForeground": "#ffd666",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::greenColors', () => {
    setRuntimeColors('greenColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#95de64",
        "panelTitle.activeForeground": "#95de64",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::limeColors', () => {
    setRuntimeColors('limeColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#d3f261",
        "panelTitle.activeForeground": "#d3f261",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#ff85c0",
        "panelTitle.activeForeground": "#ff85c0",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#ffc069",
        "panelTitle.activeForeground": "#ffc069",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#b37feb",
        "panelTitle.activeForeground": "#b37feb",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::redColors', () => {
    setRuntimeColors('redColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#ff7875",
        "panelTitle.activeForeground": "#ff7875",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#ff9c6e",
        "panelTitle.activeForeground": "#ff9c6e",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })

  it('panelTitle::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const panelTitle = pc.panelTitle()

    expect(panelTitle).toMatchInlineSnapshot(`
      {
        "panelTitle.activeBorder": "#fff566",
        "panelTitle.activeForeground": "#fff566",
        "panelTitle.inactiveForeground": "#75715E",
      }
    `)
  })
})

describe('panelInput', () => {
  it('panelInput::length', () => {
    const panelInput = pc.panelInput()

    expect(Object.keys(panelInput)).toHaveLength(1)
  })

  it('panelInput::blueColors', () => {
    setRuntimeColors('blueColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::goldColors', () => {
    setRuntimeColors('goldColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::greenColors', () => {
    setRuntimeColors('greenColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::limeColors', () => {
    setRuntimeColors('limeColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::redColors', () => {
    setRuntimeColors('redColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })

  it('panelInput::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const panelInput = pc.panelInput()

    expect(panelInput).toMatchInlineSnapshot(`
      {
        "panelInput.border": "",
      }
    `)
  })
})

describe('panelSection', () => {
  it('panelSection::length', () => {
    const panelSection = pc.panelSection()

    expect(Object.keys(panelSection)).toHaveLength(2)
  })

  it('panelSection::blueColors', () => {
    setRuntimeColors('blueColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::goldColors', () => {
    setRuntimeColors('goldColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::greenColors', () => {
    setRuntimeColors('greenColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::limeColors', () => {
    setRuntimeColors('limeColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::redColors', () => {
    setRuntimeColors('redColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })

  it('panelSection::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const panelSection = pc.panelSection()

    expect(panelSection).toMatchInlineSnapshot(`
      {
        "panelSection.border": "",
        "panelSection.dropBackground": "",
      }
    `)
  })
})

describe('panelSectionHeader', () => {
  it('panelSectionHeader::length', () => {
    const panelSectionHeader = pc.panelSectionHeader()

    expect(Object.keys(panelSectionHeader)).toHaveLength(3)
  })

  it('panelSectionHeader::blueColors', () => {
    setRuntimeColors('blueColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::goldColors', () => {
    setRuntimeColors('goldColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::greenColors', () => {
    setRuntimeColors('greenColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::limeColors', () => {
    setRuntimeColors('limeColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::redColors', () => {
    setRuntimeColors('redColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })

  it('panelSectionHeader::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const panelSectionHeader = pc.panelSectionHeader()

    expect(panelSectionHeader).toMatchInlineSnapshot(`
      {
        "panelSectionHeader.background": "",
        "panelSectionHeader.border": "",
        "panelSectionHeader.foreground": "",
      }
    `)
  })
})
