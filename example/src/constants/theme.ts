import {
  DarkTheme as NavigationDarkTheme
} from "@react-navigation/native"

import {
  adaptNavigationTheme,
  MD3DarkTheme as PaperDarkTheme
} from "react-native-paper"


const { DarkTheme: ReactNavigationDarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme
})

const CustomDarkTheme = {
  "colors": {
    "primary": "rgb(187, 195, 255)",
    "onPrimary": "rgb(17, 34, 134)",
    "primaryContainer": "rgb(45, 60, 156)",
    "onPrimaryContainer": "rgb(223, 224, 255)",
    "secondary": "rgb(196, 197, 221)",
    "onSecondary": "rgb(45, 47, 66)",
    "secondaryContainer": "rgb(67, 69, 89)",
    "onSecondaryContainer": "rgb(224, 225, 249)",
    "tertiary": "rgb(230, 186, 215)",
    "onTertiary": "rgb(69, 38, 61)",
    "tertiaryContainer": "rgb(93, 60, 84)",
    "onTertiaryContainer": "rgb(255, 215, 240)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(27, 27, 31)",
    "onBackground": "rgb(228, 225, 230)",
    "surface": "rgb(27, 27, 31)",
    "onSurface": "rgb(228, 225, 230)",
    "surfaceVariant": "rgb(70, 70, 79)",
    "onSurfaceVariant": "rgb(199, 197, 208)",
    "outline": "rgb(144, 144, 154)",
    "outlineVariant": "rgb(70, 70, 79)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(228, 225, 230)",
    "inverseOnSurface": "rgb(48, 48, 52)",
    "inversePrimary": "rgb(71, 85, 182)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(35, 35, 42)",
      "level2": "rgb(40, 40, 49)",
      "level3": "rgb(45, 46, 56)",
      "level4": "rgb(46, 47, 58)",
      "level5": "rgb(49, 51, 62)"
    },
    "surfaceDisabled": "rgba(228, 225, 230, 0.12)",
    "onSurfaceDisabled": "rgba(228, 225, 230, 0.38)",
    "backdrop": "rgba(47, 48, 56, 0.4)"
  }
}

export const DarkTheme = {
  ...PaperDarkTheme,
  ...ReactNavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...ReactNavigationDarkTheme.colors,
    ...CustomDarkTheme.colors
  }
}
