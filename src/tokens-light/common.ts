export interface RawAtomTheme {
  name: string
  scope: string[]
  extraScope?: string[]
  excludeScope?: string[]
  rawScope: string[]
  foreground: string | (() => string)
  fontStyle: string
}

export interface AtomTheme {
  name: string
  scope: string[]
  settings: {
    foreground: string
    fontStyle: string
  }
}

type GenAtomThemeFn = () => AtomTheme

export function gnAtomThemeFns(
  rawAtomThemes: RawAtomTheme[],
  extTypes: string[]
): GenAtomThemeFn[] {
  const fns = rawAtomThemes.map((atom: RawAtomTheme) => {
    extTypes.forEach((type) => {
      atom.rawScope.forEach((raw) => {
        atom.scope.push(`${raw}.${type}`)
      })
    })
    return () =>
      ({
        name: atom.name,
        scope: [...atom.scope, ...(atom.extraScope ?? [])],
        settings: {
          foreground:
            typeof atom.foreground === 'function'
              ? atom.foreground()
              : atom.foreground,
          fontStyle: atom.fontStyle
        }
      } as AtomTheme)
  })

  return fns
}
