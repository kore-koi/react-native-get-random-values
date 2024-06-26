const GetRandomValues = require('./NativeGetRandomValues').default;

export function multiply(a: number, b: number): number {
  return GetRandomValues.multiply(a, b);
}
