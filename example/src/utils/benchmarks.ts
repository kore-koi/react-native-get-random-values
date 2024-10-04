import { getRandomValues, MAX_BYTE_ARRAY_LENGTH } from "@korekoi/react-native-get-random-values"

const b64GetRandomValues = global.crypto.getRandomValues

export const measure = (size: number, loops = 10000): number => {
  let sum = 0
  for (let i = 0; i < loops; i++) {
    const a = new Uint8Array(size)
    const start = performance.now()
    getRandomValues(a)
    const end = performance.now()
    sum += end - start
  }
  return sum / loops
}

export const measureB64 = (size: number, loops = 10000) => {
  let sum = 0
  for (let i = 0; i < loops; i++) {
    const a = new Uint8Array(size)
    const start = performance.now()
    b64GetRandomValues(a)
    const end = performance.now()
    sum += end - start
  }
  return sum / loops
}

export const smallSize = 32
export const mediumSize = Math.floor(MAX_BYTE_ARRAY_LENGTH / 4)
export const largeSize = Math.floor(MAX_BYTE_ARRAY_LENGTH / 2)
export const maxSize = MAX_BYTE_ARRAY_LENGTH
