import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { quiz } from '../contra/quiz';
const Choices = ({ setSelectCorrectAnswer, selectCorrectAnswer, quizIndex }) => {
  const isSelect = (x) => selectCorrectAnswer?.includes(x);

  const handleSelect = (x) => {
    if (!isSelect(x)) {
      return setSelectCorrectAnswer([...selectCorrectAnswer, x]);
    } else {
      setSelectCorrectAnswer(
        selectCorrectAnswer.filter((item, index) => item !== x)
      );
    }

  };

  return (
    <ScrollView key={quizIndex} contentContainerStyle={{ flexGrow: 1 }}>
      {quiz[quizIndex].choices.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleSelect(item.id)}
          style={{
            marginTop: 10,
            marginBottom: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: isSelect(item.id) && 'tomato',
          }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.res}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Choices;
