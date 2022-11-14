import { systemColors } from '../../designs/systemColor'

const colorsPrefix = [
  'blueColors',
  'geekBlueColors',
  'cyanColors',
  'goldColors',
  'grayColors',
  'greenColors',
  'limeColors',
  'magentaColors',
  'orangeColors',
  'purpleColors',
  'redColors',
  'volcanoColors',
  'yellowColors'
]

describe('System Color Level 2', () => {
  it('blueColors', () => {
    const colors = systemColors.blueColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "blueColors100",
        "blueColors200",
        "blueColors300",
        "blueColors400",
        "blueColors500",
        "blueColors600",
        "blueColors700",
        "blueColors800",
        "blueColors900",
        "blueColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "blueColors100": "#e6f7ff",
        "blueColors1000": "#002766",
        "blueColors200": "#bae7ff",
        "blueColors300": "#91d5ff",
        "blueColors400": "#69c0ff",
        "blueColors500": "#40a9ff",
        "blueColors600": "#1890ff",
        "blueColors700": "#096dd9",
        "blueColors800": "#0050b3",
        "blueColors900": "#003a8c",
      }
    `)
  })

  it('geekBlueColors', () => {
    const colors = systemColors.geekBlueColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "geekBlueColors100",
        "geekBlueColors200",
        "geekBlueColors300",
        "geekBlueColors400",
        "geekBlueColors500",
        "geekBlueColors600",
        "geekBlueColors700",
        "geekBlueColors800",
        "geekBlueColors900",
        "geekBlueColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "geekBlueColors100": "#f0f5ff",
        "geekBlueColors1000": "#030852",
        "geekBlueColors200": "#d6e4ff",
        "geekBlueColors300": "#adc6ff",
        "geekBlueColors400": "#85a5ff",
        "geekBlueColors500": "#597ef7",
        "geekBlueColors600": "#2f54eb",
        "geekBlueColors700": "#1d39c4",
        "geekBlueColors800": "#10239e",
        "geekBlueColors900": "#061178",
      }
    `)
  })

  it('cyanColors', () => {
    const colors = systemColors.cyanColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "cyanColors100",
        "cyanColors200",
        "cyanColors300",
        "cyanColors400",
        "cyanColors500",
        "cyanColors600",
        "cyanColors700",
        "cyanColors800",
        "cyanColors900",
        "cyanColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "cyanColors100": "#e6fffb",
        "cyanColors1000": "#002329",
        "cyanColors200": "#b5f5ec",
        "cyanColors300": "#87e8de",
        "cyanColors400": "#5cdbd3",
        "cyanColors500": "#36cfc9",
        "cyanColors600": "#13c2c2",
        "cyanColors700": "#08979c",
        "cyanColors800": "#006d75",
        "cyanColors900": "#00474f",
      }
    `)
  })

  it('goldColors', () => {
    const colors = systemColors.goldColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "goldColors100",
        "goldColors200",
        "goldColors300",
        "goldColors400",
        "goldColors500",
        "goldColors600",
        "goldColors700",
        "goldColors800",
        "goldColors900",
        "goldColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "goldColors100": "#fffbe6",
        "goldColors1000": "#613400",
        "goldColors200": "#fff1b8",
        "goldColors300": "#ffe58f",
        "goldColors400": "#ffd666",
        "goldColors500": "#ffc53d",
        "goldColors600": "#faad14",
        "goldColors700": "#d48806",
        "goldColors800": "#ad6800",
        "goldColors900": "#874d00",
      }
    `)
  })

  it('###grayColors###', () => {
    const colors = systemColors.grayColors
    expect(Object.keys(colors)).toHaveLength(13)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "grayColors100",
        "grayColors200",
        "grayColors300",
        "grayColors400",
        "grayColors500",
        "grayColors600",
        "grayColors700",
        "grayColors800",
        "grayColors900",
        "grayColors1000",
        "grayColors1100",
        "grayColors1200",
        "grayColors1300",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "grayColors100": "#ffffff",
        "grayColors1000": "#262626",
        "grayColors1100": "#1f1f1f",
        "grayColors1200": "#141414",
        "grayColors1300": "#000000",
        "grayColors200": "#fafafa",
        "grayColors300": "#f5f5f5",
        "grayColors400": "#f0f0f0",
        "grayColors500": "#d9d9d9",
        "grayColors600": "#bfbfbf",
        "grayColors700": "#8c8c8c",
        "grayColors800": "#595959",
        "grayColors900": "#434343",
      }
    `)
  })

  it('greenColors', () => {
    const colors = systemColors.greenColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "greenColors100",
        "greenColors200",
        "greenColors300",
        "greenColors400",
        "greenColors500",
        "greenColors600",
        "greenColors700",
        "greenColors800",
        "greenColors900",
        "greenColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "greenColors100": "#f6ffed",
        "greenColors1000": "#092b00",
        "greenColors200": "#d9f7be",
        "greenColors300": "#b7eb8f",
        "greenColors400": "#95de64",
        "greenColors500": "#73d13d",
        "greenColors600": "#52c41a",
        "greenColors700": "#389e0d",
        "greenColors800": "#237804",
        "greenColors900": "#135200",
      }
    `)
  })

  it('limeColors', () => {
    const colors = systemColors.limeColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "limeColors100",
        "limeColors200",
        "limeColors300",
        "limeColors400",
        "limeColors500",
        "limeColors600",
        "limeColors700",
        "limeColors800",
        "limeColors900",
        "limeColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "limeColors100": "#fcffe6",
        "limeColors1000": "#254000",
        "limeColors200": "#f4ffb8",
        "limeColors300": "#eaff8f",
        "limeColors400": "#d3f261",
        "limeColors500": "#bae637",
        "limeColors600": "#a0d911",
        "limeColors700": "#7cb305",
        "limeColors800": "#5b8c00",
        "limeColors900": "#3f6600",
      }
    `)
  })

  it('magentaColors', () => {
    const colors = systemColors.magentaColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "magentaColors100",
        "magentaColors200",
        "magentaColors300",
        "magentaColors400",
        "magentaColors500",
        "magentaColors600",
        "magentaColors700",
        "magentaColors800",
        "magentaColors900",
        "magentaColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "magentaColors100": "#fff0f6",
        "magentaColors1000": "#520339",
        "magentaColors200": "#ffd6e7",
        "magentaColors300": "#ffadd2",
        "magentaColors400": "#ff85c0",
        "magentaColors500": "#f759ab",
        "magentaColors600": "#eb2f96",
        "magentaColors700": "#c41d7f",
        "magentaColors800": "#9e1068",
        "magentaColors900": "#780650",
      }
    `)
  })

  it('orangeColors', () => {
    const colors = systemColors.orangeColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "orangeColors100",
        "orangeColors200",
        "orangeColors300",
        "orangeColors400",
        "orangeColors500",
        "orangeColors600",
        "orangeColors700",
        "orangeColors800",
        "orangeColors900",
        "orangeColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "orangeColors100": "#fff7e6",
        "orangeColors1000": "#612500",
        "orangeColors200": "#ffe7ba",
        "orangeColors300": "#ffd591",
        "orangeColors400": "#ffc069",
        "orangeColors500": "#ffa940",
        "orangeColors600": "#fa8c16",
        "orangeColors700": "#d46b08",
        "orangeColors800": "#ad4e00",
        "orangeColors900": "#873800",
      }
    `)
  })

  it('purpleColors', () => {
    const colors = systemColors.purpleColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "purpleColors100",
        "purpleColors200",
        "purpleColors300",
        "purpleColors400",
        "purpleColors500",
        "purpleColors600",
        "purpleColors700",
        "purpleColors800",
        "purpleColors900",
        "purpleColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "purpleColors100": "#f9f0ff",
        "purpleColors1000": "#120338",
        "purpleColors200": "#efdbff",
        "purpleColors300": "#d3adf7",
        "purpleColors400": "#b37feb",
        "purpleColors500": "#9254de",
        "purpleColors600": "#722ed1",
        "purpleColors700": "#531dab",
        "purpleColors800": "#391085",
        "purpleColors900": "#22075e",
      }
    `)
  })

  it('redColors', () => {
    const colors = systemColors.redColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "redColors100",
        "redColors200",
        "redColors300",
        "redColors400",
        "redColors500",
        "redColors600",
        "redColors700",
        "redColors800",
        "redColors900",
        "redColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "redColors100": "#fff1f0",
        "redColors1000": "#5c0011",
        "redColors200": "#ffccc7",
        "redColors300": "#ffa39e",
        "redColors400": "#ff7875",
        "redColors500": "#ff4d4f",
        "redColors600": "#f5222d",
        "redColors700": "#cf1322",
        "redColors800": "#a8071a",
        "redColors900": "#820014",
      }
    `)
  })

  it('volcanoColors', () => {
    const colors = systemColors.volcanoColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "volcanoColors100",
        "volcanoColors200",
        "volcanoColors300",
        "volcanoColors400",
        "volcanoColors500",
        "volcanoColors600",
        "volcanoColors700",
        "volcanoColors800",
        "volcanoColors900",
        "volcanoColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "volcanoColors100": "#fff2e8",
        "volcanoColors1000": "#610b00",
        "volcanoColors200": "#ffd8bf",
        "volcanoColors300": "#ffbb96",
        "volcanoColors400": "#ff9c6e",
        "volcanoColors500": "#ff7a45",
        "volcanoColors600": "#fa541c",
        "volcanoColors700": "#d4380d",
        "volcanoColors800": "#ad2102",
        "volcanoColors900": "#871400",
      }
    `)
  })

  it('yellowColors', () => {
    const colors = systemColors.yellowColors
    expect(Object.keys(colors)).toHaveLength(10)
    expect(Object.keys(colors)).toMatchInlineSnapshot(`
      [
        "yellowColors100",
        "yellowColors200",
        "yellowColors300",
        "yellowColors400",
        "yellowColors500",
        "yellowColors600",
        "yellowColors700",
        "yellowColors800",
        "yellowColors900",
        "yellowColors1000",
      ]
    `)
    expect(colors).toMatchInlineSnapshot(`
      {
        "yellowColors100": "#feffe6",
        "yellowColors1000": "#614700",
        "yellowColors200": "#ffffb8",
        "yellowColors300": "#fffb8f",
        "yellowColors400": "#fff566",
        "yellowColors500": "#ffec3d",
        "yellowColors600": "#fadb14",
        "yellowColors700": "#d4b106",
        "yellowColors800": "#ad8b00",
        "yellowColors900": "#876800",
      }
    `)
  })
})

it('systemColors:keys', () => {
  const systemColorKeys = Object.keys(systemColors)

  expect(colorsPrefix).toEqual(systemColorKeys)
  expect(systemColorKeys).toMatchInlineSnapshot(`
    [
      "blueColors",
      "geekBlueColors",
      "cyanColors",
      "goldColors",
      "grayColors",
      "greenColors",
      "limeColors",
      "magentaColors",
      "orangeColors",
      "purpleColors",
      "redColors",
      "volcanoColors",
      "yellowColors",
    ]
  `)
})

it('systemColors:snapshot', () => {
  expect(systemColors).toMatchInlineSnapshot(`
    {
      "blueColors": {
        "blueColors100": "#e6f7ff",
        "blueColors1000": "#002766",
        "blueColors200": "#bae7ff",
        "blueColors300": "#91d5ff",
        "blueColors400": "#69c0ff",
        "blueColors500": "#40a9ff",
        "blueColors600": "#1890ff",
        "blueColors700": "#096dd9",
        "blueColors800": "#0050b3",
        "blueColors900": "#003a8c",
      },
      "cyanColors": {
        "cyanColors100": "#e6fffb",
        "cyanColors1000": "#002329",
        "cyanColors200": "#b5f5ec",
        "cyanColors300": "#87e8de",
        "cyanColors400": "#5cdbd3",
        "cyanColors500": "#36cfc9",
        "cyanColors600": "#13c2c2",
        "cyanColors700": "#08979c",
        "cyanColors800": "#006d75",
        "cyanColors900": "#00474f",
      },
      "geekBlueColors": {
        "geekBlueColors100": "#f0f5ff",
        "geekBlueColors1000": "#030852",
        "geekBlueColors200": "#d6e4ff",
        "geekBlueColors300": "#adc6ff",
        "geekBlueColors400": "#85a5ff",
        "geekBlueColors500": "#597ef7",
        "geekBlueColors600": "#2f54eb",
        "geekBlueColors700": "#1d39c4",
        "geekBlueColors800": "#10239e",
        "geekBlueColors900": "#061178",
      },
      "goldColors": {
        "goldColors100": "#fffbe6",
        "goldColors1000": "#613400",
        "goldColors200": "#fff1b8",
        "goldColors300": "#ffe58f",
        "goldColors400": "#ffd666",
        "goldColors500": "#ffc53d",
        "goldColors600": "#faad14",
        "goldColors700": "#d48806",
        "goldColors800": "#ad6800",
        "goldColors900": "#874d00",
      },
      "grayColors": {
        "grayColors100": "#ffffff",
        "grayColors1000": "#262626",
        "grayColors1100": "#1f1f1f",
        "grayColors1200": "#141414",
        "grayColors1300": "#000000",
        "grayColors200": "#fafafa",
        "grayColors300": "#f5f5f5",
        "grayColors400": "#f0f0f0",
        "grayColors500": "#d9d9d9",
        "grayColors600": "#bfbfbf",
        "grayColors700": "#8c8c8c",
        "grayColors800": "#595959",
        "grayColors900": "#434343",
      },
      "greenColors": {
        "greenColors100": "#f6ffed",
        "greenColors1000": "#092b00",
        "greenColors200": "#d9f7be",
        "greenColors300": "#b7eb8f",
        "greenColors400": "#95de64",
        "greenColors500": "#73d13d",
        "greenColors600": "#52c41a",
        "greenColors700": "#389e0d",
        "greenColors800": "#237804",
        "greenColors900": "#135200",
      },
      "limeColors": {
        "limeColors100": "#fcffe6",
        "limeColors1000": "#254000",
        "limeColors200": "#f4ffb8",
        "limeColors300": "#eaff8f",
        "limeColors400": "#d3f261",
        "limeColors500": "#bae637",
        "limeColors600": "#a0d911",
        "limeColors700": "#7cb305",
        "limeColors800": "#5b8c00",
        "limeColors900": "#3f6600",
      },
      "magentaColors": {
        "magentaColors100": "#fff0f6",
        "magentaColors1000": "#520339",
        "magentaColors200": "#ffd6e7",
        "magentaColors300": "#ffadd2",
        "magentaColors400": "#ff85c0",
        "magentaColors500": "#f759ab",
        "magentaColors600": "#eb2f96",
        "magentaColors700": "#c41d7f",
        "magentaColors800": "#9e1068",
        "magentaColors900": "#780650",
      },
      "orangeColors": {
        "orangeColors100": "#fff7e6",
        "orangeColors1000": "#612500",
        "orangeColors200": "#ffe7ba",
        "orangeColors300": "#ffd591",
        "orangeColors400": "#ffc069",
        "orangeColors500": "#ffa940",
        "orangeColors600": "#fa8c16",
        "orangeColors700": "#d46b08",
        "orangeColors800": "#ad4e00",
        "orangeColors900": "#873800",
      },
      "purpleColors": {
        "purpleColors100": "#f9f0ff",
        "purpleColors1000": "#120338",
        "purpleColors200": "#efdbff",
        "purpleColors300": "#d3adf7",
        "purpleColors400": "#b37feb",
        "purpleColors500": "#9254de",
        "purpleColors600": "#722ed1",
        "purpleColors700": "#531dab",
        "purpleColors800": "#391085",
        "purpleColors900": "#22075e",
      },
      "redColors": {
        "redColors100": "#fff1f0",
        "redColors1000": "#5c0011",
        "redColors200": "#ffccc7",
        "redColors300": "#ffa39e",
        "redColors400": "#ff7875",
        "redColors500": "#ff4d4f",
        "redColors600": "#f5222d",
        "redColors700": "#cf1322",
        "redColors800": "#a8071a",
        "redColors900": "#820014",
      },
      "volcanoColors": {
        "volcanoColors100": "#fff2e8",
        "volcanoColors1000": "#610b00",
        "volcanoColors200": "#ffd8bf",
        "volcanoColors300": "#ffbb96",
        "volcanoColors400": "#ff9c6e",
        "volcanoColors500": "#ff7a45",
        "volcanoColors600": "#fa541c",
        "volcanoColors700": "#d4380d",
        "volcanoColors800": "#ad2102",
        "volcanoColors900": "#871400",
      },
      "yellowColors": {
        "yellowColors100": "#feffe6",
        "yellowColors1000": "#614700",
        "yellowColors200": "#ffffb8",
        "yellowColors300": "#fffb8f",
        "yellowColors400": "#fff566",
        "yellowColors500": "#ffec3d",
        "yellowColors600": "#fadb14",
        "yellowColors700": "#d4b106",
        "yellowColors800": "#ad8b00",
        "yellowColors900": "#876800",
      },
    }
  `)
})
