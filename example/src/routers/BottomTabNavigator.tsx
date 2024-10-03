import React, { type FunctionComponent } from "react"
import type { BottomTabParamList } from "../types/navigation/BottomTabParamList"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { JSI } from "../screens/JSI"
import { B64 } from "../screens/B64"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Results } from "../screens/Results"

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator: FunctionComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="JSI"
      backBehavior="history"
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
    >
      <Tab.Screen
        name="JSI"
        component={JSI}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="lightning-bolt" size={24} color={color} />
          }
        }}

      />
      <Tab.Screen
        name="B64"
        component={B64}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="snail" size={24} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Results"
        component={Results}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="table-clock" size={24} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}


export default BottomTabNavigator
