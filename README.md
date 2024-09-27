# react-native-get-random-values

react native polyfill for crypto getRandomValues

## Installation

```sh
npm install @korekoi/react-native-get-random-values
```

## Usage


```js
import '@korekoi/react-native-get-random-values';

// ...

const array = new Uint8Array(32);
global.crypto.getRandomValues(array);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
