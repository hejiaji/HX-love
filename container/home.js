import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { calculateDaysBetween } from '../utils/date';
import homeIcon from '../images/home.png';
import homeFocusIcon from '../images/home-focus.png';

const datingDate = new Date('2015-08-08');
const engageDate = new Date('2017-08-12');
const marriedDate = new Date('2018-02-14');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  engagedDateText: {
    fontSize: 16,
  },
  marriedDateText: {
    fontSize: 20,
  }
});

export default class Home extends React.Component {
  render() {
    const now = Date.now();
    const dayFromDating = calculateDaysBetween(datingDate, now);
    const dayFromEngage = calculateDaysBetween(engageDate, now);
    const dayFromMarriage = calculateDaysBetween(marriedDate, now);
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hi，老婆!</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>这是我们在一起的第{dayFromDating}天.</Text>
          <Text style={styles.engagedDateText}>这是我们订婚的第{dayFromEngage}天.</Text>
          <Text style={styles.marriedDateText}>这是我们结婚的第{dayFromMarriage}天.</Text>
        </View>
      </View>
    );
  }
}

Home.navigationOptions = {
  title: '',
  tabBarIcon: ({ focused }) => (
    <Image source={focused ? homeFocusIcon : homeIcon} />
  ),
};
