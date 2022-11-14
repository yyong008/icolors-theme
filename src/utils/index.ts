export * from './theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeNullStrAttr(obj: any) {
  for (const k in obj) {
    if (obj[k] === '') {
      delete obj[k]
    }
  }

  return obj
}
