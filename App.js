import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/scenes/Home";
import Champion from "./src/scenes/Champion";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Champion"
          component={Champion}
          options={({ route }) => ({ title: route.params.championID })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
