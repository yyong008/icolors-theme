import { setRuntimeColors } from '../../designs/index'
import git from '../../dark/git-colors'

describe('gitDecoration', () => {
  it('gitDecoration::length', () => {
    const gitDecoration = git.gitDecoration()

    expect(Object.keys(gitDecoration)).toHaveLength(10)
  })

  it('gitDecoration::blueColors', () => {
    setRuntimeColors('blueColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::goldColors', () => {
    setRuntimeColors('goldColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::greenColors', () => {
    setRuntimeColors('greenColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::limeColors', () => {
    setRuntimeColors('limeColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::redColors', () => {
    setRuntimeColors('redColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })

  it('gitDecoration::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const gitDecoration = git.gitDecoration()

    expect(gitDecoration).toMatchInlineSnapshot(`
      {
        "gitDecoration.addedResourceForeground": "#f0f0f0",
        "gitDecoration.conflictingResourceForeground": "#fadb14",
        "gitDecoration.deletedResourceForeground": "#434343",
        "gitDecoration.ignoredResourceForeground": "#237804",
        "gitDecoration.modifiedResourceForeground": "#ffbb96",
        "gitDecoration.renamedResourceForeground": "#69c0ff",
        "gitDecoration.stageDeletedResourceForeground": "#092b00",
        "gitDecoration.stageModifiedResourceForeground": "#40a9ff",
        "gitDecoration.submoduleResourceForeground": "#13c2c2",
        "gitDecoration.untrackedResourceForeground": "#389e0d",
      }
    `)
  })
})
