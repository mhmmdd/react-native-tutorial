import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({title, subTitle, uri}) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          height: 200,
          uri: uri
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20
  },
  detailsContainer: {
    padding: 20,
  },
  uri: {
    width: '100%',
    height: 200
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7
  },
});

export default Card;