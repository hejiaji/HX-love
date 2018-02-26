import React from 'react';
import { TabNavigator } from 'react-navigation';

import home from './container/home';
import about from './container/about';

const Routers = TabNavigator({
  Home: { screen: home },
  About: { screen: about }
}, {
  animationEnabled: true,
  tabBarOptions: {
    tabStyle: {
      top: 5,
    }
  },
});

export default class App extends React.Component {
  render() {
    return <Routers />;
  }
}
