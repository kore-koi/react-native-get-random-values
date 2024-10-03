import type { NavigatorScreenParams } from "@react-navigation/native"

export type BottomTabParamList = {
  JSI: NavigatorScreenParams<undefined>
  B64: NavigatorScreenParams<undefined>
  Results: NavigatorScreenParams<undefined>
}

export type BottomTabRouteName = keyof BottomTabParamList
