import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";

export default function Meals({ navigation }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setMeals(json));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={meals}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 15 }}
            onPress={() => navigation.navigate("MealDetail", { item })}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Text>Preço: R$ {item.price}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
