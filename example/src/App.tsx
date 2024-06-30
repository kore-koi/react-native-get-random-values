import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import '@kore-koi/react-native-get-random-values';


export default function App() {
  React.useEffect(() => {
    const test = new Int32Array(32);
    const a = new Uint8Array(32);
    const b = new Int8Array(32);
    const big = new Uint8Array(65536);
    const bigger = new Uint32Array(16384);

    // console.log(global.crypto.getRandomValues(test))
    // console.log(global.crypto.getRandomValues(big))
    // console.log(global.crypto.getRandomValues(bigger))
    // console.log(global.crypto.getRandomValues(a))
    // console.log(global.crypto.getRandomValues(b))

  }, [])

  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
