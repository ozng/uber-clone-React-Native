import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../store/slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng,
        }}
        title="Origin"
        description={origin?.description}
        identifier="origin"
      />
    </MapView>
  );
};

export default Map;
