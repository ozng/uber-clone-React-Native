import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapStack from "../navigation/MapStack";

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.65}
        style={tw`bg-gray-100 absolute top-10 left-3 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="home" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <MapStack />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
