/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DetailScreen,
  HomeScreen,
  ActiveScreen,
  SearchScreen,
  UserScreen,
} from '@screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode={'none'}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Active') {
                iconName = focused ? 'md-rocket' : 'md-rocket-outline';
              } else if (route.name === 'User') {
                iconName = focused ? 'md-person-sharp' : 'md-person-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#DC4A53',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
