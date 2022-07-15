import * as React from 'react';
import { Text, View } from 'react-native';
import TextButton from '../components/TextButton';
import { AntDesign } from '@expo/vector-icons';
export default function CheckSection({ isCheck, selected, handleCheck, correctAnswer, handleContinue }) {
  return (
    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
      {!isCheck && (
        <View
          style={{
            height: 60,
            width: '100%',
          }}>
          <TextButton
            title="Check"
            disabled={!selected}
            onPress={handleCheck}
            isSelect={selected}
          />
        </View>
      )}
      {isCheck && (
        <View
          style={{
            backgroundColor: correctAnswer ? '#d7ffb8' : '#ffdfe0',
            height: 150,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
            }}>
            <AntDesign
              name={correctAnswer ? 'checkcircleo' : 'closecircle'}
              size={50}
              color={correctAnswer ? '#58a700' : '#ea2b2b'}
            />
            <Text
              style={{
                color: correctAnswer ? '#58a700' : '#ea2b2b',
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              {correctAnswer ? 'Nice job!' : 'Wrong Answer'}
            </Text>
          </View>
          <TextButton
            title="Continue"
            disabled={!selected}
            onPress={handleContinue}
            isSelect={selected}
            isCorrect={correctAnswer}
          />
        </View>
      )}
    </View>
  );
}
