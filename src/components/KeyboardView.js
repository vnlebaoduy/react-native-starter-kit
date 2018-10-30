import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function KeyboardView({ children }) {
  const extraHeight = Platform.OS === 'android' ? 100 : 25;

  return (
    <KeyboardAwareScrollView extraHeight={extraHeight} extraScrollHeight={extraHeight} enableOnAndroid>
      {children}
    </KeyboardAwareScrollView>
  );
}
