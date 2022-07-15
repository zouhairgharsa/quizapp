import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function ProgressDuolingo({progress}) {

  return (
    <View style={{ marginHorizontal: 12,marginTop:10 }}>
      <View
        style={{
          height: 20,
          width: `100%`,
          backgroundColor: '#e5e5e5',
          borderRadius: 12,
          overflow: 'hidden',
        }}>
        <View
          style={{
            width: `${(progress / 10) * 100}%`,
            height: 20,
            backgroundColor: '#58cc02',
          }}
        />
      </View>
    </View>
  );
}
