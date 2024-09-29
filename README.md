<a>
  <picture>
    <img alt="@kore-koi/react-native-get-random-values" src=".github/assets/banner.svg"/>
  </picture>
</a>

### Features

- 🫳 Drop-in replacement for `crypto.getRandomValues`
- ⚡ Uses JSI for faster operations  between Native and JS
- 🔒 Native C++ secure randomization using [libsodium](https://github.com/jedisct1/libsodium)

### Installation

```sh
npm install react-native-nitro-modules @korekoi/react-native-get-random-values
```

![NPM Version](https://img.shields.io/npm/v/@korekoi/react-native-get-random-values?color=blue&style=flat-square)

### Usage

```typescript
import "@korekoi/react-native-get-random-values"

const array = new Uint8Array(32);
global.crypto.getRandomValues(array);
```


> See the [example app](./example/)

### How does it compare to other alternatives?

The most downloaded and probably the only available library to polyfill this method (until now) has been [LinusU/react-native-get-random-values](https://github.com/LinusU/react-native-get-random-values), but our solution has a couple improvements:

- **JSI**, Native and JavaScript communicate through a memory reference and not by serializing data in Base64 back-and-forth, which results in faster operations
- Randomization is made using [libsodium](https://github.com/jedisct1/libsodium) for both iOS and Android
  - instead of [Java SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html) for Android and [Objective-C SecRandomCopyBytes](https://developer.apple.com/documentation/security/secrandomcopybytes(_:_:_:)?language=objc) or [Swift SecRandomCopyBytes](https://developer.apple.com/documentation/security/secrandomcopybytes(_:_:_:)) for iOS

### Benchmark

_TODO_
