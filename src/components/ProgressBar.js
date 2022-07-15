import React from 'react';

import { View, Text } from 'react-native';

export const ProgressBar = ({ progress }) => {
  return (
    <View
      style={{
        height: 8,
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
      }}>
      <View
        style={{ height: 8, width: `${progress}%`, backgroundColor: 'green' }}
      />
    </View>
  );
};
