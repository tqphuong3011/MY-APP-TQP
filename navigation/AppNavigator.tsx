import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../app/intro';
import Homepage from '../app/homepage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Homepage" component={Homepage} />
    </Stack.Navigator>
  );
};

export default AppNavigator; 