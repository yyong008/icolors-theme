import keyword from './keyword'
import variables from './variable'
import string from './string'
import functions from './function'
import comment from './comment'
import attr from './attribute'
import moduleFn from './module'
import struct from './struct'
import escape from './escape'
import operator from './operator'
import typeSystem from './type-system'
import macro from './macro'
import life from './life'
import loop from './loop'
import punctuation from './punctuation'

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
    ...escape,
    ...operator,
    ...typeSystem,
    ...macro,
    ...life,
    ...loop,
    ...punctuation
  ]
}
