import React from 'react';
import Screen from "./Screen";
import {FlatList, StyleSheet} from "react-native";
import Card from "./Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    uri: 'https://i.picsum.photos/id/743/400/200.jpg?hmac=89YSOI3Exp8NPCE4hvPJ9j9jTit78snTs_d2Jm3_y4A'
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    uri: 'https://i.picsum.photos/id/772/400/200.jpg?hmac=BUyLZIBAqe92kAgTj0h-VRB1MLgIBSDOK6weB5rM5jk'
  }
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            uri={item.uri}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});

export default ListingsScreen;