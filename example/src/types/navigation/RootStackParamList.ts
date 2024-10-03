import type { NavigatorScreenParams } from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { BottomTabParamList } from "./BottomTabParamList"

export type RootStackParamList = {
  Anime: {
    url: string
  }

  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type RootStackRouteName = keyof RootStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
