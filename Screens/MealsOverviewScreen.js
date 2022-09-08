import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealsList from "../Components/MealList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const deplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={deplayedMeals} />;
};

export default MealsOverviewScreen;
