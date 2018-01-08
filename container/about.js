import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import coupleIcon from '../images/couple.png';
import coupleFocusIcon from '../images/couple-focused.png';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Text>Empty</Text>
      </SafeAreaView>
    );
  }
}

Home.navigationOptions = {
  title: '',
  tabBarIcon: ({ focused }) => (
    <Image source={focused ? coupleFocusIcon : coupleIcon}/>
  ),
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
};
