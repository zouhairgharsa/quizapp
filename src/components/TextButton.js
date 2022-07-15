import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TextButton({
  onPress,
  disabled,
  isSelect,
  title,
  isCorrect,
  ...props
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: !isSelect ? 'grey' : title === "Continue" ? (isCorrect ? 'green' : 'red') : 'green',
        marginHorizontal: 12,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
        ...props,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: '500',
          color: isSelect ? 'white' : '#AFAFAF',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
