import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getRandomValues } from '@korekoi/react-native-get-random-values';
import { getRandomValues as b64GetRandomValues } from "react-native-get-random-values"


export default function App() {
  React.useEffect(() => {
    console.log("====================LIBSODIUM + NITRO=======================")
    const loops = 10000
    let sum = 0
    for (let i = 0; i < loops; i++) {
      const start = performance.now()
      const a = new Uint32Array(16384)
      getRandomValues(a)

      const end = performance.now()
      sum += end - start
    }
    console.log(`Average time for ${loops} loops: ${sum / loops}ms`)
  }, [])

  React.useEffect(() => {
    console.log("====================SERIALIZATION WITH SWIFT AND JAVA=======================")
    const loops = 1000
    let sum = 0
    for (let i = 0; i < loops; i++) {
      const start = performance.now()
      const a = new Uint32Array(16384)
      b64GetRandomValues(a)

      const end = performance.now()
      sum += end - start
    }
    console.log(`Average time for ${loops} loops: ${sum / loops}ms`)
  }, [])

  return (
    <View style={styles.container}>
      <Text>
        Hello World!
      </Text>
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
