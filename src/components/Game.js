import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Game = ({ name, index, active }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      disabled={!active}
      onPress={() => navigation.navigate(name)}
      style={{
        borderWidth: 10,
        borderColor: '#b58c19',
        borderRadius: 65,
        width: 130,
        height: 130,
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        opacity: active ? 1 : 0.5,
      }}>
      {!active && (
        <Entypo
          name="lock"
          size={40}
          color="black"
          style={{ position: 'absolute', zIndex: 1 }}
        />
      )}
      <View
        style={{
          width: 120,
          height: 120,
          backgroundColor: '#595548',
          borderRadius: 120 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,

          elevation: 16,
        }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '900',
            textAlign: 'center',
            paddingLeft:10,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Game;
