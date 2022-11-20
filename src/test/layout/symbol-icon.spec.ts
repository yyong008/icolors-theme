import { setRuntimeColors } from '../../designs/index'
import sb from '../../dark/symbol-icons-colors'

describe('symbolIcon', () => {
  it('symbolIcon::length', () => {
    const symbolIcon = sb.symbolIcon()

    expect(Object.keys(symbolIcon)).toHaveLength(33)
  })

  it('symbolIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::redColors', () => {
    setRuntimeColors('redColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })

  it('symbolIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const symbolIcon = sb.symbolIcon()

    expect(symbolIcon).toMatchInlineSnapshot(`
      {
        "symbolIcon.arrayForeground": "",
        "symbolIcon.booleanForeground": "",
        "symbolIcon.classForeground": "",
        "symbolIcon.colorForeground": "",
        "symbolIcon.constantForeground": "",
        "symbolIcon.constructorForeground": "",
        "symbolIcon.enumeratorForeground": "",
        "symbolIcon.enumeratorMemberForeground": "",
        "symbolIcon.eventForeground": "",
        "symbolIcon.fieldForeground": "",
        "symbolIcon.fileForeground": "",
        "symbolIcon.folderForeground": "",
        "symbolIcon.functionForeground": "",
        "symbolIcon.interfaceForeground": "",
        "symbolIcon.keyForeground": "",
        "symbolIcon.keywordForeground": "",
        "symbolIcon.methodForeground": "",
        "symbolIcon.moduleForeground": "",
        "symbolIcon.namespaceForeground": "",
        "symbolIcon.nullForeground": "",
        "symbolIcon.numberForeground": "",
        "symbolIcon.objectForeground": "",
        "symbolIcon.operatorForeground": "",
        "symbolIcon.packageForeground": "",
        "symbolIcon.propertyForeground": "",
        "symbolIcon.referenceForeground": "",
        "symbolIcon.snippetForeground": "",
        "symbolIcon.stringForeground": "",
        "symbolIcon.structForeground": "",
        "symbolIcon.textForeground": "",
        "symbolIcon.typeParameterForeground": "",
        "symbolIcon.unitForeground": "",
        "symbolIcon.variableForeground": "",
      }
    `)
  })
})
