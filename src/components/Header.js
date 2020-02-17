import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import React from 'react';

export const Header = ({onPress}) => (
  <SafeAreaView>
    <TouchableOpacity onPress={onPress} style={{width: '100%', height: 200}}>
      <Text>back</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
