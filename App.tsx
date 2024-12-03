import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';


import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, View } from 'react-native';
import ButtonPage from './app/buttons';
import InputPage from './app/input';
import { VStack } from './components/ui/vstack';
import { Text } from './components/ui/text';
import { Input, InputField, InputIcon, InputSlot } from './components/ui/input';

export default function App() {
  return <GluestackUIProvider mode="light">
    <View style={styles.container}>
    <ButtonPage/>
      <StatusBar style="auto" />
    </View>
  </GluestackUIProvider>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});