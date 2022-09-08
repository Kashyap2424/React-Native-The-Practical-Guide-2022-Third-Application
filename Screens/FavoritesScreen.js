import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../Components/MealList/MealsList";
import { FavoritesContext } from "../Store/Context/favorites-context";
import { MEALS } from "../Data/dummy-data";

const FavoritesScreen = () => {
  const favoritesMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorit meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
