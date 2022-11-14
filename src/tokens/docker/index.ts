import docker from './docker'
import string from './string'

export default function dockerfile() {
  return [...docker, ...string]
}
