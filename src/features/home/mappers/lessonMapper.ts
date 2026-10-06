import { ComponentType } from "react";
import ComponentsScreen from "../screens/lessons/basic/ComponentsScreen";
import JsxMobileScreen from "../screens/lessons/basic/JsxMobileScreen";
import PropsScreen from "../screens/lessons/basic/PropsScreen";
import StateScreen from "../screens/lessons/basic/StateScreen";

export const LESSON_COMPONENTS: Record<string, ComponentType> = {
  // lecciones de conceptos basicos:
  "jsx": JsxMobileScreen,
  "components": ComponentsScreen,
  "props": PropsScreen,
  "state": StateScreen
  
  // Lecciones de conceptos intermedios:

  // Lecciones de conceptos avanzados:

}