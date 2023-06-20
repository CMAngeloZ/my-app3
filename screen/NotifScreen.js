import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MessageScreen from './MessageScreen';
import ContactScreen from './ContactScreen';

const Tab = createMaterialTopTabNavigator();

export default function NotifScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Notification" />
            </Appbar.Header>
            <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: { 
                    backgroundColor: 'blue' 
                },
            }}>
                <Tab.Screen name="Upcoming" component={MessageScreen} />
                <Tab.Screen name="Completed" component={ContactScreen} />
            </Tab.Navigator>
        </>
    )
}
    