import {BasicView} from './BasicView';
import {Button} from 'react-native';
import {Header} from './Header';
import React from 'react';
const Notice = ({navigation}) => {
  return (
    <>
      {/* <Header onPress={() => navigation.goBack()} /> */}
      <BasicView bgColor={'pink'} content={'공지사항'} />
      <Button
        title={'Go To Setting'}
        onPress={() => navigation.navigate('Setting')}
      />
    </>
  );
};

export default Notice;
