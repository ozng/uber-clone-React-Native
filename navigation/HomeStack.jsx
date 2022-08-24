import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="EatsScreen" component={EatsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
