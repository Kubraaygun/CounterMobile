import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Azalt</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>0</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sıfırla</Text>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },

  countText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
