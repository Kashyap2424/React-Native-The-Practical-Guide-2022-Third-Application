import { StyleSheet, Text, View, FlatList } from "react-native";

import { MEALS } from "../Data/dummy-data";
import MealItem from "../Components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const deplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={deplayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
