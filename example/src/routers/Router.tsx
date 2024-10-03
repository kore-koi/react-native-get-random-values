import React, { type FunctionComponent } from "react"
import { NavigationContainer } from "@react-navigation/native"
import RootStackNavigator from "./RootStackNavigator"
import { Provider as PaperProvider } from "react-native-paper"
import { DarkTheme as theme } from "../constants/theme"

const Router: FunctionComponent = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default Router
