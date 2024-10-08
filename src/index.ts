import { NitroModules, type HybridObject } from "react-native-nitro-modules"

export type CompatibleArray =
  | Uint8Array // 1byte
  | Int8Array // 1byte
  | Uint16Array // 2byte
  | Int16Array // 2byte
  | Int32Array // 4byte
  | Uint32Array; // 4byte

declare global {
  // eslint-disable-next-line no-var
  var crypto: {
    getRandomValues: <T extends CompatibleArray>(array: T) => T
  }
}

export interface Sodium extends HybridObject {
  getRandomValues(buffer: ArrayBuffer): void;
}

const MAX_BYTE_ARRAY_LENGTH = 65536

const sodium = NitroModules.createHybridObject<Sodium>("Sodium")

// port correct types as the browser/node implementation https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#exceptions
class TypeMismatchError extends Error {}
class QuotaExceededError extends Error {}

const getRandomValues = <T extends CompatibleArray>(array: T): T => {
  if (array.byteLength > MAX_BYTE_ARRAY_LENGTH) {
    throw new QuotaExceededError(
      "ArrayBuffer length exceeds maximum length of 65536 bytes."
    )
  }

  sodium.getRandomValues(array.buffer)

  return array
}

if (typeof global.crypto !== "object") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global.crypto = {} as any
}

if (typeof global.crypto.getRandomValues === "undefined") {
  global.crypto.getRandomValues = getRandomValues
}

export { getRandomValues, TypeMismatchError, QuotaExceededError, MAX_BYTE_ARRAY_LENGTH }
