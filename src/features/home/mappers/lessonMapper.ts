import { ComponentType } from "react";
import ComponentsScreen from "../screens/lessons/basic/ComponentsScreen";
import JsxMobileScreen from "../screens/lessons/basic/JsxMobileScreen";
import NativeComponentsScreen from "../screens/lessons/basic/NativeComponentsScreen";
import PressableScreen from "../screens/lessons/basic/PressableScreen";
import PropsScreen from "../screens/lessons/basic/PropsScreen";
import StateScreen from "../screens/lessons/basic/StateScreen";
import StylesScreen from "../screens/lessons/basic/StylesScreen";

export const LESSON_COMPONENTS: Record<string, ComponentType> = {
  // lecciones de conceptos basicos:
  "jsx": JsxMobileScreen,
  "native-components": NativeComponentsScreen,
  "pressable": PressableScreen,
  "styles": StylesScreen,
  "components": ComponentsScreen,
  "props": PropsScreen,
  "state": StateScreen,
  
  // Lecciones de conceptos intermedios:

  // Lecciones de conceptos avanzados:

}