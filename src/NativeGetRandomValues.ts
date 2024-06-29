import { NativeModules, Platform } from "react-native"

export type CompatibleArray = |
  Uint8Array | // 1byte
  Int8Array | // 1byte
  Uint16Array | // 2byte
  Int16Array | // 2byte
  Int32Array | // 4byte
  Uint32Array | // 4byte
  Uint8ClampedArray // 1byte

export type CompatibleArrayName = |
  Uint8Array["constructor"]["name"] |
  Int8Array["constructor"]["name"] |
  Uint16Array["constructor"]["name"] |
  Int16Array["constructor"]["name"] |
  Int32Array["constructor"]["name"] |
  Uint32Array["constructor"]["name"] |
  Uint8ClampedArray["constructor"]["name"]

export const arrayTypeEnum: {
  [key in CompatibleArrayName]: number
} = {
  "Int8Array": 0,
  "Uint8Array": 1,
  "Uint8ClampedArray": 2,
  "Int16Array": 3,
  "Uint16Array": 4,
  "Int32Array": 5,
  "Uint32Array": 6
}

declare global {
  // eslint-disable-next-line no-var
  var __NativeGetRandomValues: {
    init: () => void
    getRandomValues: <T extends CompatibleArray>(array: T, arrayType: number) => T
  }

  var crypto: {
    getRandomValues: <T extends CompatibleArray>(array: T) => T
  }
}

const createNativeGetRandomValues = () => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!global.__NativeGetRandomValues) {
    const NativeGetRandomValues = NativeModules.GetRandomValues

    if (!NativeGetRandomValues) {
      let message =
        "Failed to create a new GetRandomValuesInstance instance: The native GetRandomValues Module could not be found."
      message +=
        "\n* Make sure react-native-get-random-values is correctly autolinked (run `npx react-native config` to verify)"
      if (Platform.OS === "ios" || Platform.OS === "macos") {
        message += "\n* Make sure you ran `pod install` in the ios/ directory."
      }
      if (Platform.OS === "android") {
        message += "\n* Make sure gradle is synced."
      }
      throw new Error(message)
    }
    NativeGetRandomValues.install()
  }
}

export default createNativeGetRandomValues
