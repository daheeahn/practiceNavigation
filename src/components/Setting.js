import {BasicView} from './BasicView';
import {Header} from './Header';
import React from 'react';

const Setting = ({navigation}) => (
  <>
    {/* <Header onPress={() => navigation.goBack()} /> */}
    <BasicView content={'설정'} bgColor={'green'} textColor={'white'} />
  </>
);

export default Setting;
