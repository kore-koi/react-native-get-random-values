import React, { type FunctionComponent } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { RootStackParamList } from "../types/navigation/RootStackParamList"

import BottomTabNavigator from "./BottomTabNavigator"
import CustomNavigationBar from "../components/CustomNavigationBar"

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={"BottomTabNavigator"}
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
        orientation: "portrait",
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: true,
          title: "Benchmarks"
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStackNavigator
