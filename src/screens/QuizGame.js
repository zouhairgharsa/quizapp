import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import { useFetch } from '../hooks/useFetch';
export default function QuizQame() {

  const { data, error, loading } = useFetch(
    'https://opentdb.com/api.php?amount=4&type=multiple'
  );

  const [submit, setSumbit] = useState(false);
  const newresults = data.map((item) => {
    return {
      ...item,
      arrRes: [...item.incorrect_answers, item.correct_answer],
    };
  });

  const [items, setItems] = useState([]);
  const handleSelect = (question, res) => {
    if (!items.find((item) => item.question === question)) {
      setItems([...items, { question: question, res: res }]);
    } else {
      setItems(
        items.map((item) =>
          item.question == question ? { ...item, res: res } : item
        )
      );
    }
  };

  const isSelect = (x) => items.find((item) => item.res === x);
  const results =
    !submit &&
    newresults.filter((item) => isSelect(item.correct_answer));

  const handleSumbit = () => {
    setSumbit(true);
  };

  if (loading) {
    return (
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 100 }}>
        please Wait...
      </Text>
    );
  }

  if (error) {
    return <Text>no data....</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={newresults}
        contentContainerStyle={{ flexGrow: 0 }}
        keyExtractor={(item) => item.question}
        renderItem={({ item }) => (
          <View>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 15,
                color: '#243c59',
                fontWeight: '500',
                marginBottom: 10,
              }}>
              {item.question}
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {item.arrRes.map((res) => (
                <TouchableOpacity
                  disabled={submit}
                  key={res}
                  onPress={() => handleSelect(item.question, res)}
                  style={{
                    backgroundColor:
                      !submit && isSelect(res)
                        ? 'blue'
                        : submit && res == item.correct_answer && isSelect(res)
                          ? 'green'
                          : !isSelect(res)
                            ? 'white'
                            : 'red',
                    marginBottom: 10,
                    alignSelf: 'center',
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    padding: 5,
                  }}>
                  <Text style={{ color: isSelect(res) && 'white' }}>
                    {res}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
      {loading === false && (
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: !(items.length === data.length) ? 'grey' : 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          disabled={!(items.length === data.length)}
          onPress={handleSumbit}>
          <Text style={{ fontSize: 16, color: 'white' }}>onSumbit</Text>
        </TouchableOpacity>
      )}
      {submit && (
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          You have {results.length} corrects
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
