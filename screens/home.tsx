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
      <Button title="02 - Profile"
              onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
              }
      />
    </View>
  );
}


