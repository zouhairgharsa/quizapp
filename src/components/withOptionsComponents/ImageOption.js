import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

export default function ImageOption({ item, onSelect, isSelect, disabled }) {
  const { image, text } = item;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onSelect}
      style={{
        width: '45%',
        height: 200,
        borderWidth: 1,
        borderColor: isSelect ? '#0cc0ed' : 'white',
        backgroundColor: isSelect ? '#ddf4ff' : 'white',
        marginBottom: 15,
        marginRight: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13,
      }}>
      <Image
        source={image}
        style={{ width: '100%', height: 150, resizeMode: 'contain', flex: 1 }}
      />
      <Text style={{ fontSize: 17, fontWeight: '400', color: '#4B4B4B' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}