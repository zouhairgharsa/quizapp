import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = Array.from({ length: 8 }).map(() => Math.ceil(Math.random() * 6));
let newNumber = Math.ceil(Math.random() * 6);

export default function DiceGame() {
  const { width } = useWindowDimensions();

  const datadices = data.map((item) => ({
    number: item,
    id: Math.random(),
    isHeld: false,
  }));
  const [dices, setDices] = useState(datadices);

  const handleSelect = (id) => {
    setDices(
      dices.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  };

  const handleRoll = () => {
    return setDices(
      dices.map((item) => {
        const newNumber = Math.ceil(Math.random() * 6);
        return !item.isHeld ? { ...item, number: newNumber } : item;
      })
    );
  };

  const handleReplay = () => {
    setDices(datadices);
    newNumber = Math.ceil(Math.random() * 6);
  };

  const isWin = dices.every((item) => item.isHeld && item.number === newNumber);
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Roll until all dice are the same. Click each die to freeze it at it's
          current number bewteen rolls.
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Number is :<Text style={{color:'tomato',fontSize:30,fontStyle:'italic'}}>{newNumber}</Text>
        </Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {dices.map((item) => (
          <TouchableOpacity
            disabled={item.isHeld && item.number === newNumber}
            onPress={() => handleSelect(item.id)}
            key={item.id}
            style={{
              width: 0.2 * width,
              aspectRatio: 1,
              borderWidth: 1,
              marginRight: 5,
              marginBottom: 10,
              borderRadius: 8,
              backgroundColor: !item.isHeld
                ? 'white'
                : newNumber === item.number
                ? 'green'
                : 'red',
            }}>
            <MaterialCommunityIcons
              name={`dice-${item.number}`}
              size={0.2 * width}
              color="black"
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={handleRoll}
        style={{
          padding: 15,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 30,
          borderRadius: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Roll</Text>
      </TouchableOpacity>

      {isWin && (
        <View>
          <Text style={{ color: 'tomato', fontSize: 30, textAlign: 'center' }}>
            Congralutions
          </Text>
          <TouchableOpacity style={{alignSelf:'center',marginTop:10}} onPress={handleReplay}>
           <MaterialCommunityIcons name="restart" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
