declare module "react-native-get-random-values" {
  export function getRandomValues<T extends Uint8Array | Uint16Array | Uint32Array>(array: T): T;
}
