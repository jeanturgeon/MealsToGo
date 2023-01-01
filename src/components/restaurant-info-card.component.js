import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry.jpg"],
    address = "100 rue de l'avenue",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false 
    } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cover: { padding: 20, backgroundColor: "white" },
  card: { backgroundColor: "white" },
  title: {padding: 16}
});
