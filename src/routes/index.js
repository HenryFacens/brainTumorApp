import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Register from '../pages/Register';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};