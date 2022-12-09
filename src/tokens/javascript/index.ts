import jsModule from './module'

import jsConst from './const'
import jsAsyncAwait from './async'
import jsFunction from './function'
import jsComment from './comment'
import jsTemplate from './template'
import jsVariable from './variable'
import jsOperator from './operator'
import jsDitional from './conditional'
import jsObject from './object'
import jsString from './string'
import jsLoop from './loop'
import jsLabel from './labelsynax'
import jsEscape from './escape'
import jsClass from './class'
import punctuation from './punctuation'
import tsEnum from './enum'
import tsInterface from './interface'
import tsX from './x'
import tsTypes from './type-system'
import docScopes from './doc'

export default function jsLanguage() {
  return [
    ...jsModule,
    ...jsConst,
    ...jsAsyncAwait,
    ...jsFunction,
    ...jsComment,
    ...jsTemplate,
    ...jsVariable,
    ...jsOperator,
    ...jsDitional,
    ...jsObject,
    ...jsString,
    ...jsLoop,
    ...jsLabel,
    ...jsEscape,
    ...jsClass,
    ...punctuation,
    ...tsEnum,
    ...tsInterface,
    ...tsX,
    ...tsTypes,
    ...docScopes
  ]
}
