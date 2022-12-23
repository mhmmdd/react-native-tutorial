import React from 'react';
import Screen from "../../components/Screen";
import ListItem from "../../components/Listitem";
import {FlatList, StyleSheet, View} from "react-native";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListitemSeperator";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
];

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Muhammed" subTitle="mhmmd.dd@gmail.com"
                  uri={"https://picsum.photos/200/300"}/>
      </View>
      <View style={styles.container}>
        <FlatList data={menuItems}
                  keyExtractor={item => item.title}
                  ItemSeparatorComponent={ListItemSeparator}
                  renderItem={({item}) =>
                    <ListItem
                      title={item.title}
                      IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                      }/>
                  }
        />
      </View>
      <ListItem title="Log Out"
                IconComponent={
                  <Icon name="logout" backgroundColor="#ffe66d"/>
                }/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  },
});

export default AccountScreen;