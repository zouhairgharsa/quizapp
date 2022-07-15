import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const numbers = [...Array(6)].map(() => Math.floor(Math.random() * 100));
const total = numbers.slice(0, 3).reduce((number, acc) => number + acc, 0);

export default function SumApp() {
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [time, setTime] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => setTime((c) => c > 0 && c - 1), 1000);

    return () => clearInterval(timer);
  }, []);
  const isSelect = (index) => selectedIndex.includes(index);
  const handleSelect = (index) => {
    !isSelect(index)
      ? setSelectedIndex([...selectedIndex, index])
      : setSelectedIndex(selectedIndex.filter((item) => item !== index));
  };

  const results = numbers
    .filter((item, index) => isSelect(index))
    .reduce((number, acc) => acc + number, 0);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 50,
          alignSelf: 'center',
          backgroundColor:
            results < total && time > 0
              ? 'lightgrey'
              : results > total || time == 0
              ? 'red'
              : 'green',
          height: 80,
          paddingHorizontal: 40,
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 36, fontWeight: '500' }}>{total}</Text>
      </View>
      <FlatList
        data={numbers}
        horizontal
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'center',
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            disabled={results >= total || !time}
            onPress={() => handleSelect(index)}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
              marginBottom: 20,
              backgroundColor: isSelect(index) && '#de860b',
            }}>
            <Text style={{ fontSize: 20 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <Text
          style={{ textAlign: 'center', fontSize: 20, fontStyle: 'italic' }}>
          {results < total && time > 0 ? (
            <View>
              <Text style={{ color: 'grey' }}>Still Playing...</Text>
              <Text>{time}</Text>
            </View>
          ) : results > total || time == 0 ? (
            <Text style={{ color: 'red' }}>Lost</Text>
          ) : (
            <Text style={{ color: 'green' }}>Win</Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
