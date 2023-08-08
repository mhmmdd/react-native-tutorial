import { Button, View } from "react-native";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Button
        title="01 - Fundamental"
        onPress={() => navigation.navigate("01Fundamental")}
      />
      <Button
        title="02 - Layout"
        onPress={() => navigation.navigate("02Layout")}
      />
      <Button
        title="03 - Flexbox"
        onPress={() => navigation.navigate("03Flexbox")}
      />
      <Button title="04 - List" onPress={() => navigation.navigate("04List")} />
      <Button
        title="05 - Account"
        onPress={() => navigation.navigate("05Account")}
      />
      <Button
        title="06 - Listing"
        onPress={() => navigation.navigate("06Listing")}
      />
      <Button
        title="07 - Input"
        onPress={() => navigation.navigate("07Input")}
      />
      <Button
        title="08 - Login"
        onPress={() => navigation.navigate("08Login")}
      />
      <Button
        title="09 - Listing Edit"
        onPress={() => navigation.navigate("09ListingEdit")}
      />
      <Button
        title="10 - Image Picker"
        onPress={() => navigation.navigate("10ImagePicker")}
      />
      <Button
        title="11 - Listing Edit"
        onPress={() => navigation.navigate("11ListingEdit")}
      />
      <Button
        title="02 - Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="12 - ImageSave"
        onPress={() => navigation.navigate("ImageSave")}
      />
    </View>
  );
}
