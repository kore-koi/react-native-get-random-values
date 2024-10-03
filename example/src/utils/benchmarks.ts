import { getRandomValues, MAX_BYTE_ARRAY_LENGTH } from "@korekoi/react-native-get-random-values"

const b64GetRandomValues = global.crypto.getRandomValues

export const measure = (size: number, loops = 10000) => {
  for (let i = 0; i < loops; i++) {
    const a = new Uint8Array(size)
    getRandomValues(a)
  }

}

export const measureB64 = (size: number, loops = 10000) => {
  for (let i = 0; i < loops; i++) {
    const a = new Uint8Array(size)
    b64GetRandomValues(a)
  }
}

export const smallSize = 32
export const mediumSize = Math.floor(MAX_BYTE_ARRAY_LENGTH / 2)
export const maxSize = MAX_BYTE_ARRAY_LENGTH
