import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/slices/navSlice";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/base";

const NavigateCard = ({ navigation }) => {
  const dispatch = useDispatch();

  const greetings = () => {
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 16) {
      return "Good Afternoon";
    } else if (hour >= 16 && hour < 24) {
      return "Good Evening";
    }
  };

  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>
        {greetings() + " Traveler"}
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={inputBoxStyles}
            enablePoweredByContainer={false}
            minLength={2}
            fetchDetails={true}
            query={{
              key: GOOGLE_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavourites />
        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            style={tw`flex flex-row justify-between items-center bg-black w-24 px-4 py-3 rounded-full`}
            onPress={() => navigation.navigate("RideOptionsCard")}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between w-24 px-4 py-3 rounded-full`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="black"
              size={16}
            />
            <Text style={tw`text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default NavigateCard;
