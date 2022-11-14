import keyword from './keyword'
import variables from './variable'
import string from './string'
import functions from './function'
import comment from './comment'
import attr from './attribute'
import moduleFn from './module'
import struct from './struct'
import control from './control'
import escape from './escape'
import operator from './operator'
import typeSystem from './type-system'
import macro from './macro'

export default function rustLanuage() {
  return [
    ...keyword,
    ...variables,
    ...string,
    ...functions,
    ...comment,
    ...attr,
    ...moduleFn,
    ...struct,
    ...control,
    ...escape,
    ...operator,
    ...typeSystem,
    ...macro
  ]
}
