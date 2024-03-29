import type { List } from '../types/List'

const list = (): Partial<List> => ({
  ['list.activeSelectionBackground']: '#75715E',
  ['list.inactiveSelectionBackground']: '#414339',
  ['list.hoverBackground']: '#3e3d32',
  ['list.dropBackground']: '#414339',
  ['list.highlightForeground']: '#f8f8f2'
})

export default { list }
