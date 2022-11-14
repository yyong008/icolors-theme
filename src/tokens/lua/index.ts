import luaConst from './const'
import luaFunction from './function'
import luaComment from './comment'
import luaTemplate from './template'
import luaVariable from './variable'
import luaOperator from './operator'
import luaDitional from './conditional'
import luaObject from './object'
import luaString from './string'
import luaLoop from './loop'
import luaEscape from './escape'
import luaRegExp from './regexp'

export default function luaColorTokens() {
  return [
    ...luaConst,
    ...luaFunction,
    ...luaComment,
    ...luaTemplate,
    ...luaVariable,
    ...luaOperator,
    ...luaDitional,
    ...luaObject,
    ...luaString,
    ...luaLoop,
    ...luaEscape,
    ...luaRegExp
  ]
}
