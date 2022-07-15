import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { topics } from '../constants/data';
import Game from '../components/Game';
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        horizontal
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          width,
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingTop: 50
        }}
        renderItem={({ item, index }) => (
          <Game active={item.active} index={index} name={item.name} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
