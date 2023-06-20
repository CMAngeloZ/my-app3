import * as React from 'react';

//theme library
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//default color
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};

//stack nav library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//toptab nav library
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TTab = createMaterialTopTabNavigator();

//bottomtab nav library
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

//bottomtab icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

//calling screen
import HomeScreen from '../screen/HomeScreen';
import NotifScreen from '../screen/NotifScreen';
import SettingScreen from '../screen/SettingScreen';
import OrderScreen from '../screen/OrderScreen';
import ReportScreen from '../screen/ReportScreen';

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="ReportScreen" component={ReportScreen} />
          </Stack.Navigator>
    	  </NavigationContainer>
      </PaperProvider>
  )
}

function TopTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    );
  }

//bottomtab appear in homescreen
function HomeTab() {
  return (
    <Tab.Navigator
      activeColor="blue"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="NotifScreen" 
        component={NotifScreen}
        options={{
          tabBarLabel: 'Notif',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="SettingScreen" 
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}