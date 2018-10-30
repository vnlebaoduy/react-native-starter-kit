import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ signUp }) => (
  <View>
    <Text>AuthComponent</Text>
    <Button onPress={signUp} title="signUp scene" />
  </View>
);
