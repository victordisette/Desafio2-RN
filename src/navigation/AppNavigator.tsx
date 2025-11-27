import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import Meals from "../screens/Meals";
import MealDetail from "../screens/MealDetail";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Categories" 
        component={Categories}
        options={{ title: "Categorias" }}
      />
      <Stack.Screen 
        name="Meals" 
        component={Meals}
        options={{ title: "Refeições" }}
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetail}
        options={{ title: "Detalhes da Refeição" }}
      />
    </Stack.Navigator>
  );
}
