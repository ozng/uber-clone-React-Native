import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const EatsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This feature will be available soon.</Text>
      <Text style={styles.title}>Stay tuned. :)</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={tw`text-blue-400 mt-4`}>Click here to go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});
