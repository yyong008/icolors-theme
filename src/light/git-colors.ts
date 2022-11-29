import type GitDecoration from '../types/Git.js'

// import colors from '../designs/index.js'

const gitDecoration = (): Partial<GitDecoration> => ({
  ['gitDecoration.addedResourceForeground']: '#587c0c',
  ['gitDecoration.modifiedResourceForeground']: '#895503',
  ['gitDecoration.deletedResourceForeground']: '#ad0707',
  ['gitDecoration.renamedResourceForeground']: '#007100',
  ['gitDecoration.stageModifiedResourceForeground']: '#895503',
  ['gitDecoration.stageDeletedResourceForeground']: '#ad0707',
  ['gitDecoration.untrackedResourceForeground']: '#007100',
  ['gitDecoration.ignoredResourceForeground']: '#8E8E90',
  ['gitDecoration.conflictingResourceForeground']: '#e4676b',
  ['gitDecoration.submoduleResourceForeground']: '#1258a7'
})

export default { gitDecoration }
