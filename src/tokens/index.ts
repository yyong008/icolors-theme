import javaScriptLanuage from './javascript/index'
import jsonLanguage from './json/index'
import cssLanguage from './css/index'
import htmlLanguage from './html/index'
import markdownLanguage from './markdown/index'
import yamlLanuage from './yaml/index'
import luaLanuage from './lua/index'
import vueLanuage from './vue/index'
import docker from './docker/index'
import rust from './rust/index'
import toml from './toml/index'
import editorconfig from './editorconfig/index'
import shell from './shell/index'

export default function createColorTokens() {
  return [
    ...javaScriptLanuage(),
    ...jsonLanguage(),
    ...cssLanguage(),
    ...htmlLanguage(),
    ...markdownLanguage(),
    ...yamlLanuage(),
    ...luaLanuage(),
    ...vueLanuage(),
    ...docker(),
    ...rust(),
    ...toml(),
    ...editorconfig(),
    ...shell()
  ].map((f) => f())
}
