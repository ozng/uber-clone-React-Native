import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NavigateCard" component={NavigateCard} />
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};

export default MapStack;
