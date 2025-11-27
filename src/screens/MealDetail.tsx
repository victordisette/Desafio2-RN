import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MealDetail({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>Preço: R$ {item.price}</Text>
          <Text style={{ marginTop: 10 }}>{item.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
