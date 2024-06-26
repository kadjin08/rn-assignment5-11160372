
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchButton = ({ onPress }) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '45%'  }}>
    <TouchableOpacity onPress={onPress} style={{alignSelf: 'flex-end'
    }}>
        <View style={{padding: 10 ,backgroundColor: 'whitesmoke', borderRadius :50, margin:10, }}>
      <Icon name="magnify" size={24} color="black" />
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default SearchButton;

