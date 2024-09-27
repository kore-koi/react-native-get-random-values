import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import '@kore-koi/react-native-get-random-values';


export default function App() {
  React.useEffect(() => {
    const a = new Uint8Array(32);

    console.log("TEST", global.crypto.getRandomValues(a))
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
