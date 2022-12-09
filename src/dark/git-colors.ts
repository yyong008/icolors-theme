import type GitDecoration from '../types/Git'

const gitDecoration = (): Partial<GitDecoration> => ({
  ['gitDecoration.addedResourceForeground']: '#81b88b',
  ['gitDecoration.modifiedResourceForeground']: '#E2C08D',
  ['gitDecoration.deletedResourceForeground']: '#c74e39',
  ['gitDecoration.renamedResourceForeground']: '#73C991',
  ['gitDecoration.stageModifiedResourceForeground']: '#E2C08D',
  ['gitDecoration.stageDeletedResourceForeground']: '#c74e39',
  ['gitDecoration.untrackedResourceForeground']: '#73C991',
  ['gitDecoration.ignoredResourceForeground']: '#8C8C8C',
  ['gitDecoration.conflictingResourceForeground']: '#e4676b',
  ['gitDecoration.submoduleResourceForeground']: '#8db9e2'
})

export default { gitDecoration }
