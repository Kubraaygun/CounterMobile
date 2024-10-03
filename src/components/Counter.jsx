import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Azalt</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Arttır</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
