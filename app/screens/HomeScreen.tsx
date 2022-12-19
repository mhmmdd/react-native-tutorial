import {Button, View} from 'react-native';

export default function HomeScreen({navigation}: { navigation: any }) {

  return (
    <View>
      <Button title="01 - Fundamental"
              onPress={() =>
                navigation.navigate('01Fundamental')
              }
      />
      <Button title="02 - Layout"
              onPress={() =>
                navigation.navigate('02Layout')
              }
      />
      <Button title="03 - Flexbox"
              onPress={() =>
                navigation.navigate('03Flexbox')
              }
      />
      <Button title="04 - List"
              onPress={() =>
                navigation.navigate('04List')
              }
      />
      <Button title="05 - Account"
              onPress={() =>
                navigation.navigate('05Account')
              }
      />
      <Button title="02 - Profile"
              onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
              }
      />
    </View>
  );
}


