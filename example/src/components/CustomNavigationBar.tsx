import React, { type FunctionComponent } from "react"
import { Appbar } from "react-native-paper"
import type { NativeStackHeaderProps } from "@react-navigation/native-stack"

const CustomNavigationBar: FunctionComponent<NativeStackHeaderProps> = ({
  navigation,
  back,
  options,
  route
}) =>  {
  return (
    <Appbar.Header elevated>
      { back ? <Appbar.BackAction onPress={navigation.goBack} /> : null }
      <Appbar.Content title={options.title || route.name} />
    </Appbar.Header>
  )
}

export default CustomNavigationBar
