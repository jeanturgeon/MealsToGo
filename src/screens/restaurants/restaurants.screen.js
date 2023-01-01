import React from "react";

import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: isAndroid ? StatusBar.currentHeight + 5 : 0,
    },
    search: {
      padding: 16,      
    },
    list: {
      flex: 1,
      padding: 16,      
    },
  });
  
