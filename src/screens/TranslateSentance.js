import React, { useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet } from 'react-native';
import data from '../constants/translateData';
import ProgressDuolingo from '../components/ProgessDuolingo';
import CheckSection from '../components/CheckSection';
const isEqual = (string1, string2) =>
  string1.toUpperCase().trim() === string2.toUpperCase().trim();

const TranslateSentance = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  const [isCheck, setCheck] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [input, setInput] = useState('');
  const newData = data[questionIndex];
  const reponse = newData.answer;
  const correctAnswer = isEqual(input, reponse);

  const handleCheck = () => {
    setCheck(true);

    isEqual(input, reponse) ? console.log('correct') : console.log('false');
  };

  const handleContinue = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1);
    if (questionIndex === data.length - 1) {
      navigation.navigate('Home')
    }
    setInput('');
    setCheck(false);
    if (isEqual(input, reponse)) {
      return setProgress((v) => v + 1);
    } else {
      return setProgress((v) => v > 0 && v - 1);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <ProgressDuolingo progress={progress} />

      <Text style={styles.title}>Write this in French</Text>

      <View style={styles.header}>
        <Image
          style={styles.questioner}
          source={{ uri: 'https://www.seekpng.com/png/detail/54-548734_translation.png' }}
        />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{newData.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Type in English"
        value={input}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline
      />

      <CheckSection
        isCheck={isCheck}
        selected={input}
        handleCheck={handleCheck}
        correctAnswer={correctAnswer}
        handleContinue={handleContinue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  questioner: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  sentenceContainer: {
    justifyContent: 'center',
  },
  sentence: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 5,
    fontSize: 18,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: 'lightgrey',
    flex: 0.5,
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 16,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default TranslateSentance;
