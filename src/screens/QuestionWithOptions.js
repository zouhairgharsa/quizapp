import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ImageOption from '../components/withOptionsComponents/ImageOption';
import { questionsWithOptions } from '../constants/questionsWithOptions';
import ProgressDuolingo from '../components/ProgessDuolingo';
import CheckSection from '../components/CheckSection';

export default function QuestionWithOptions({ navigation }) {
  const [progress, setProgress] = useState(0);

  const [selected, setSelect] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isCheck, setCheck] = useState(false);
  const questionsWithOptionsIndex = questionsWithOptions[questionIndex];
  const results = questionsWithOptionsIndex.options.find(
    (item) => item.id == selected
  );

  const correctAnswer = results?.correct;
  const handleSelect = (id) => {
    setSelect(id);
  };

  const handleCheck = () => {
    setCheck(true);
  };

  const handleContinue = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1);
    if (questionIndex === questionsWithOptions.length - 1) {
      navigation.navigate('Home')
    }

    setSelect('');
    setCheck(false);
    if (correctAnswer) {
      return setProgress((v) => v + 1);
    } else {

      return setProgress((v) => v > 0 && v - 1);
    }


  };
  return (
    <View style={{ flexGrow: 1 }}>
      <ProgressDuolingo progress={progress} />
      <View style={{ marginLeft: 10, marginTop: 30 }}>
        <Text style={{ color: '#3c3c3c', fontSize: 24, lineHeight: 36 }}>
          {questionsWithOptionsIndex.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
          }}>
          {questionsWithOptionsIndex.options.map((item) => (
            <ImageOption
              disabled={isCheck}
              item={item}
              onSelect={() => handleSelect(item.id)}
              isSelect={selected == item.id}
            />
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
}
