import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { ExploreScreen } from './pages/ExploreScreen';
import { UserScreen } from './pages/UserScreen';

export default function Home() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
            <Tab.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}