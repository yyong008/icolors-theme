import { setRuntimeColors } from '../../designs/index'
import st from '../../dark/settings'

describe('settingEditor', () => {
  it('settingEditor::length', () => {
    const settingEditor = st.settingEditor()

    expect(Object.keys(settingEditor)).toHaveLength(20)
  })

  it('settingEditor::blueColors', () => {
    setRuntimeColors('blueColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#40a9ff",
        "settings.dropdownBackground": "#002766",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#9e1068",
        "settings.focusedRowBorder": "#ffadd2",
        "settings.headerBorder": "#096dd9",
        "settings.headerForeground": "#1890ff",
        "settings.modifiedItemIndicator": "#f759ab",
        "settings.numberInputBackground": "#002766",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#096dd9",
        "settings.textInputBackground": "#002766",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#36cfc9",
        "settings.dropdownBackground": "#002329",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#ad6800",
        "settings.focusedRowBorder": "#ffe58f",
        "settings.headerBorder": "#08979c",
        "settings.headerForeground": "#13c2c2",
        "settings.modifiedItemIndicator": "#ffc53d",
        "settings.numberInputBackground": "#002329",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#08979c",
        "settings.textInputBackground": "#002329",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#597ef7",
        "settings.dropdownBackground": "#030852",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#9e1068",
        "settings.focusedRowBorder": "#ffadd2",
        "settings.headerBorder": "#1d39c4",
        "settings.headerForeground": "#2f54eb",
        "settings.modifiedItemIndicator": "#f759ab",
        "settings.numberInputBackground": "#030852",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#1d39c4",
        "settings.textInputBackground": "#030852",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::goldColors', () => {
    setRuntimeColors('goldColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#ffc53d",
        "settings.dropdownBackground": "#613400",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#006d75",
        "settings.focusedRowBorder": "#87e8de",
        "settings.headerBorder": "#d48806",
        "settings.headerForeground": "#faad14",
        "settings.modifiedItemIndicator": "#36cfc9",
        "settings.numberInputBackground": "#613400",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#d48806",
        "settings.textInputBackground": "#613400",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::greenColors', () => {
    setRuntimeColors('greenColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#73d13d",
        "settings.dropdownBackground": "#092b00",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#9e1068",
        "settings.focusedRowBorder": "#ffadd2",
        "settings.headerBorder": "#389e0d",
        "settings.headerForeground": "#52c41a",
        "settings.modifiedItemIndicator": "#f759ab",
        "settings.numberInputBackground": "#092b00",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#389e0d",
        "settings.textInputBackground": "#092b00",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::limeColors', () => {
    setRuntimeColors('limeColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#bae637",
        "settings.dropdownBackground": "#254000",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#9e1068",
        "settings.focusedRowBorder": "#ffadd2",
        "settings.headerBorder": "#7cb305",
        "settings.headerForeground": "#a0d911",
        "settings.modifiedItemIndicator": "#f759ab",
        "settings.numberInputBackground": "#254000",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#7cb305",
        "settings.textInputBackground": "#254000",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#f759ab",
        "settings.dropdownBackground": "#520339",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#ad8b00",
        "settings.focusedRowBorder": "#fffb8f",
        "settings.headerBorder": "#c41d7f",
        "settings.headerForeground": "#eb2f96",
        "settings.modifiedItemIndicator": "#ffec3d",
        "settings.numberInputBackground": "#520339",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#c41d7f",
        "settings.textInputBackground": "#520339",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#ffa940",
        "settings.dropdownBackground": "#612500",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#391085",
        "settings.focusedRowBorder": "#d3adf7",
        "settings.headerBorder": "#d46b08",
        "settings.headerForeground": "#fa8c16",
        "settings.modifiedItemIndicator": "#9254de",
        "settings.numberInputBackground": "#612500",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#d46b08",
        "settings.textInputBackground": "#612500",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#9254de",
        "settings.dropdownBackground": "#120338",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#ad4e00",
        "settings.focusedRowBorder": "#ffd591",
        "settings.headerBorder": "#531dab",
        "settings.headerForeground": "#722ed1",
        "settings.modifiedItemIndicator": "#ffa940",
        "settings.numberInputBackground": "#120338",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#531dab",
        "settings.textInputBackground": "#120338",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::redColors', () => {
    setRuntimeColors('redColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#ff4d4f",
        "settings.dropdownBackground": "#5c0011",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#0050b3",
        "settings.focusedRowBorder": "#91d5ff",
        "settings.headerBorder": "#cf1322",
        "settings.headerForeground": "#f5222d",
        "settings.modifiedItemIndicator": "#40a9ff",
        "settings.numberInputBackground": "#5c0011",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#cf1322",
        "settings.textInputBackground": "#5c0011",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#ff7a45",
        "settings.dropdownBackground": "#610b00",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#10239e",
        "settings.focusedRowBorder": "#adc6ff",
        "settings.headerBorder": "#d4380d",
        "settings.headerForeground": "#fa541c",
        "settings.modifiedItemIndicator": "#597ef7",
        "settings.numberInputBackground": "#610b00",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#d4380d",
        "settings.textInputBackground": "#610b00",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })

  it('settingEditor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const settingEditor = st.settingEditor()

    expect(settingEditor).toMatchInlineSnapshot(`
      {
        "settings.checkboxBackground": "#141414",
        "settings.checkboxBorder": "",
        "settings.checkboxForeground": "#ffec3d",
        "settings.dropdownBackground": "#614700",
        "settings.dropdownBorder": "",
        "settings.dropdownForeground": "#ffffff",
        "settings.dropdownListBorder": "",
        "settings.focusedRowBackground": "#9e1068",
        "settings.focusedRowBorder": "#ffadd2",
        "settings.headerBorder": "#d4b106",
        "settings.headerForeground": "#fadb14",
        "settings.modifiedItemIndicator": "#f759ab",
        "settings.numberInputBackground": "#614700",
        "settings.numberInputBorder": "",
        "settings.numberInputForeground": "#ffffff",
        "settings.rowHoverBackground": "",
        "settings.sashBorder": "#d4b106",
        "settings.textInputBackground": "#614700",
        "settings.textInputBorder": "",
        "settings.textInputForeground": "",
      }
    `)
  })
})
