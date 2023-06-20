import * as React from 'react';

//theme library
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//default color
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'black',
    primaryContainer: 'lightgreen',
    secondaryContainer: 'lightgreen',
  },
};

//stack nav library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//bottomtab nav library
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

//bottomtab icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

//calling screen
import HomeScreen from './screen/HomeScreen';

import CatListScreen from './screen/category/CatListScreen';
import CatInsertScreen from './screen/category/CatInsertScreen';
import CatUpdateScreen from './screen/category/CatUpdateScreen';

// import CountListScreen from './screen/country/CountListScreen';
// import CountInsertScreen from './screen/country/CountInsertScreen';
// import CountUpdateScreen from './screen/country/CountUpdateScreen';

import BookListScreen from './screen/book/BookListScreen';
import BookInsertScreen from './screen/book/BookInsertScreen';
import BookUpdateScreen from './screen/book/BookUpdateScreen';

// import CityListScreen from './screen/city/CityListScreen';
// import CityInsertScreen from './screen/city/CityInsertScreen';
// import CityUpdateScreen from './screen/city/CityUpdateScreen';

import ReportListScreen from './screen/report/ReportListScreen';
import ReportTableScreen from './screen/report/ReportTableScreen';
import ReportChartScreen from './screen/report/ReportChartScreen';

import CzTableScreen from './screen/report/CzTableScreen';
import CzChartScreen from './screen/report/CzChartScreen';
import CzReportChartScreen from './screen/report/CzReportChartScreen';

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="CatListScreen" component={CatListScreen} />
            <Stack.Screen name="CatInsertScreen" component={CatInsertScreen} />
            <Stack.Screen name="CatUpdateScreen" component={CatUpdateScreen} />

            {/* <Stack.Screen name="CountListScreen" component={CountListScreen} />
            <Stack.Screen name="CountInsertScreen" component={CountInsertScreen} />
            <Stack.Screen name="CountUpdateScreen" component={CountUpdateScreen} /> */}

            <Stack.Screen name="BookListScreen" component={BookListScreen} />
            <Stack.Screen name="BookInsertScreen" component={BookInsertScreen} />
            <Stack.Screen name="BookUpdateScreen" component={BookUpdateScreen} />

            {/* <Stack.Screen name="CityListScreen" component={CityListScreen} />
            <Stack.Screen name="CityInsertScreen" component={CityInsertScreen} />
            <Stack.Screen name="CityUpdateScreen" component={CityUpdateScreen} /> */}

            <Stack.Screen name="ReportListScreen" component={ReportListScreen} />
            <Stack.Screen name="ReportTableScreen" component={ReportTableScreen} />
            <Stack.Screen name="ReportChartScreen" component={ReportChartScreen} />

            <Stack.Screen name="CzTableScreen" component={CzTableScreen} />
            <Stack.Screen name="CzChartScreen" component={CzChartScreen} />
            <Stack.Screen name="CzReportChartScreen" component={CzReportChartScreen} />

          </Stack.Navigator>
    	  </NavigationContainer>
      </PaperProvider>
  )
}

//bottomtab appear in homescreen
function HomeTab() {
  return (
    <Tab.Navigator
      activeColor="green"
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
        name="CategoryTab" 
        component={CatListScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="BookTab" 
        component={BookListScreen}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }} 
      />
      {/* <Tab.Screen 
        name="CountryTab" 
        component={CountListScreen}
        options={{
          tabBarLabel: 'Country',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="CityTab" 
        component={CityListScreen}
        options={{
          tabBarLabel: 'City',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }} 
      /> */}
      <Tab.Screen 
        name="ReportTab" 
        component={ReportListScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={26} />
          ),
        }} 
      />
      
    </Tab.Navigator>
  );
}