import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDebugValue, useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');

  /*   //1) Bilesenin ekrana basilma olayini izle
  useEffect(() => {
    console.log('bilesen ekrana basildi');
  }, []);

  //2) Bilesen ekrandan gitme olayi
  useEffect(() => {
    return () => console.log('ekrandan gitti');
  }, []); */

  // //3) Bilesenin ekrana gelme ve gitme olayini izle
  // useEffect(() => {
  //   console.log('Bilesen ekrana geldi');
  //   return () => console.log('Bilesen ekrandan gitti');
  // }, []);

  // //4) Bilesenin guncellenme UPDATE olma olayini izle
  // useEffect(() => {
  //   console.log('Bilesen RENDER OLDU STATE VEYA PROPS DEGISTI');
  // });

  //5) Input Degisimine bagimli olan degeri izle

  useEffect(() => {
    console.log('Input degeri degisti', inputValue);
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Değer Giriniz"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        disabled={count === 0}
        style={[
          styles.button,
          {backgroundColor: count < 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Azalt</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>{count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={[
          styles.button,
          {backgroundColor: count > 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(0)}
        style={[styles.button, {backgroundColor: 'blue'}]}>
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  countText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
});
