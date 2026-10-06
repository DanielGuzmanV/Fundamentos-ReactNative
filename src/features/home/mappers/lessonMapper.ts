import { ComponentType } from "react";
import ComponentsScreen from "../screens/lessons/basic/ComponentsScreen";
import JsxMobileScreen from "../screens/lessons/basic/JsxMobileScreen";
import PropsScreen from "../screens/lessons/basic/PropsScreen";

export const LESSON_COMPONENTS: Record<string, ComponentType> = {
  // lecciones de conceptos basicos:
  "jsx": JsxMobileScreen,
  "components": ComponentsScreen,
  "props": PropsScreen
  
  // Lecciones de conceptos intermedios:

  // Lecciones de conceptos avanzados:

}