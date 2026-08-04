import { ConceptLevel } from "../../types/concept.types";

export const basicConcepts: ConceptLevel = {
  id: 'basic',
  title: 'Conceptos Básicos de React Native',
  iconName: 'book-outline',
  description: 'Fundamentos del framework, componentes nativos base, props, estado y renderizado elemental.',
  items: [
    {
      id: 'jsx',
      title: 'JSX en Mobile',
      description: 'Sintaxis similar a HTML dentro de JS, pero utilizando elementos nativos de móvil como <View> y <Text> instead de <div> y <p>.',
    },
    {
      id: 'components',
      title: 'Componentes',
      description: 'Bloques de UI reutilizables. Se organizan principalmente en funcionales.',
      codeExample: "const MyButton = () => <Button title=\"Click\" onPress={() => alert('Hola')} />;",
    },
    {
      id: 'props',
      title: 'Props',
      description: 'Propiedades de solo lectura pasadas de componentes padres a hijos para configurar la UI.',
      codeExample: 'const Welcome = ({ name }) => <Text>Hola, {name}!</Text>;',
    },
    {
      id: 'state',
      title: 'Estado (useState)',
      description: 'Manejo de datos dinámicos que provocan el re-renderizado de la interfaz cuando cambian.',
    },
    {
      id: 'events',
      title: 'Eventos Móviles',
      description: 'Adaptación de interacciones táctiles: onPress, onChangeText, etc.',
    },
    {
      id: 'conditional-rendering',
      title: 'Renderizado Condicional',
      description: 'Uso de operadores ternarios, && y bloques if para mostrar UI según el estado.',
    },
    {
      id: 'lists-keys',
      title: 'Listas y Keys',
      description: 'Renderizado de colecciones mediante FlatList, ScrollView o mapeo con llaves únicas.',
    },
    {
      id: 'basic-hooks',
      title: 'Hooks Básicos',
      description: 'Uso de useState, useEffect para ciclo de vida/efectos secundarios y hooks nativos de React.',
    },
    {
      id: 'native-components',
      title: 'Componentes Nativos Primarios',
      description: 'Equivalencias básicas de UI: <View>, <Text>, <Image>, <Button>, <ScrollView>, <Pressable>.',
    },
    {
      id: 'styles',
      title: 'Estilos con StyleSheet',
      description: 'Objetos JavaScript en lugar de CSS tradicional para dar formato a los componentes.',
      codeExample: 'const styles = StyleSheet.create({ container: { backgroundColor: "white", padding: 10 } });',
    },
    {
      id: 'expo-router',
      title: 'Expo Router',
      description: 'Estándar moderno de navegación basado en la estructura de archivos y carpetas.',
    },
    {
      id: 'pressable',
      title: 'Pressable',
      description: 'Componente contenedor moderno y altamente personalizable para capturar eventos de presión.',
    },
  ],
}