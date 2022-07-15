import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import filltheblank from '../constants/filltheblank';
import ProgressDuolingo from '../components/ProgessDuolingo';
import CheckSection from '../components/CheckSection';
const FilltheBlank = ({ navigation }) => {
  const [selected, setSelected] = useState('');
  const [progress, setProgress] = useState(0);
  const [isCheck, setCheck] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const quiz = filltheblank[questionIndex];

  const handleSelect = (option) => {
    setSelected(option);
  };

  const correctAnswer = selected == quiz.correctAnswer;

  const handleCheck = () => {
    setCheck(true);
  };

  const handleContinue = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1);
    if (questionIndex === filltheblank.length - 1) {
      navigation.navigate('Home');
    }

    setCheck(false);
    setSelected('');
    if (correctAnswer) {
      return setProgress((v) => v + 1);
    } else {
      return setProgress((v) => v - 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressDuolingo progress={progress} />

      <Question image={quiz.image} />
      <View style={{ marginHorizontal: 16, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 20 }}>{quiz.sentance}</Text>
          <View
            style={{
              minWidth: 100,
              borderBottomWidth: 1,
              marginLeft: 10,
              borderColor: 'blue',
              paddingBottom: 5,
            }}>
            <TouchableOpacity
              onPress={() => setSelected('')}
              style={{
                padding: 8,
                borderRadius: 5,
                alignItems: 'center',
                borderWidth: 1,
                height: 50,
                borderColor: 'grey',
              }}>
              <Text style={{ fontSize: 20 }}>{selected}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: 8,
            marginTop: 20,
          }}>
          {quiz.options.map((option) => (
            <TouchableOpacity
              disabled={option === selected}
              onPress={() => handleSelect(option)}
              style={{
                padding: 8,
                marginRight: 12,
                borderRadius: 5,
                opacity: option === selected ? 0 : 1,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'lightgrey',
                shadowColor: 'white',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              }}>
              <Text style={{ fontSize: 20 }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <CheckSection
        isCheck={isCheck}
        selected={selected}
        handleCheck={handleCheck}
        correctAnswer={correctAnswer}
        handleContinue={handleContinue}
      />
    </View>
  );
};

const Question = ({ image }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '500',
          letterSpacing: 1.25,
          color: '#3C3C3C',
        }}>
        Fill the Blank
      </Text>
      <Image
        source={image}
        style={{ width: 150, height: 150, resizeMode: 'contain' }}
      />
    </View>
  );
};

export default FilltheBlank;
