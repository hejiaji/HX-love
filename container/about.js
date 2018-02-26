import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

import coupleIcon from '../images/couple.png';
import coupleFocusIcon from '../images/couple-focused.png';
import { SafeAreaView } from 'react-navigation';

import loveImage from '../images/love-photo.png';
import phoneCallIcon from '../images/phone-call.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    alignItems: 'center',
  },
});

export default class About extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={loveImage} />
        <Text>Jeremy & Alyssa</Text>
        <TouchableOpacity style={{marginTop: 10}} onPress={() => Linking.openURL('tel:18511071881')}>
          <Image source={phoneCallIcon}/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

About.navigationOptions = {
  title: '',
  tabBarIcon: ({ focused }) => (
    <Image source={focused ? coupleFocusIcon : coupleIcon}/>
  ),
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
};
