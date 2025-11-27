import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function Categories({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Card.Title title="Categorias de Refeições" />
        <Card.Content>
          <Text>Selecione uma categoria para continuar.</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate("Meals")}>
            Ver refeições
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
