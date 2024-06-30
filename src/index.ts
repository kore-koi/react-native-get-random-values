import createNativeGetRandomValues, {
  arrayTypeEnum,
  type CompatibleArray,
} from './NativeGetRandomValues';

createNativeGetRandomValues();

// port correct types as the browser/node implementation https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#exceptions
class TypeMismatchError extends Error {}
class QuotaExceededError extends Error {}

const getRandomValues = <T extends CompatibleArray>(array: T): T => {
  if (array.byteLength > 65536) {
    throw new QuotaExceededError(
      'ArrayBuffer length exceeds maximum length of 65536 bytes.'
    );
  }
  const arrayType = arrayTypeEnum[array.constructor.name];
  if (arrayType === undefined) {
    throw new TypeMismatchError('Unsupported array type');
  }

  const filledArray = global.__NativeGetRandomValues.getRandomValues<T>(
    array,
    arrayType
  );

  return filledArray;
};

if (typeof global.crypto !== 'object') {
  // @ts-ignore
  global.crypto = {};
}

if (typeof global.crypto.getRandomValues === 'undefined') {
  // @ts-ignore
  global.crypto.getRandomValues = getRandomValues;
}

export { getRandomValues, TypeMismatchError, QuotaExceededError };
