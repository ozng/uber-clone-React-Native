import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapStack from "../navigation/MapStack";

const MapScreen = () => {
  return (
    <View>
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
