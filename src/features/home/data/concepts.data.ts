import { ConceptLevel } from '../types/concept.types';

export const CONCEPTS_DATA: ConceptLevel[] = [
  {
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
  },
  {
    id: 'intermediate',
    title: 'Conceptos Intermedios de React Native',
    iconName: 'code-working-outline',
    description: 'Gestión de datos asíncronos, referencias, context global, navegación avanzada y formularios.',
    items: [
      {
        id: 'useref',
        title: 'useRef y Referencias',
        description: 'Acceso directo a instancias de componentes (inputs, scroll) y persistencia de valores sin provocar re-renders.',
      },
      {
        id: 'usecontext-theme',
        title: 'useContext + Theme',
        description: 'Compartir estado global como temas de UI (modo claro/oscuro) e información de usuario.',
      },
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Encapsulamiento y reutilización de lógica de negocio o integración con APIs.',
      },
      {
        id: 'forms',
        title: 'Manejo de Formularios',
        description: 'Captura de entradas con TextInput, control de foco, validaciones y librerías como react-hook-form.',
      },
      {
        id: 'navigation',
        title: 'Navegación Móvil (React Navigation)',
        description: 'Patrones de ruteo como Stack, Tabs y Drawer para flujos complejos de pantallas.',
      },
      {
        id: 'async-data',
        title: 'Datos Asincrónicos',
        description: 'Peticiones HTTP con fetch/axios combinadas con async/await.',
      },
      {
        id: 'error-handling',
        title: 'Manejo de Errores',
        description: 'Estrategias con try/catch, alertas de sistema y registro de fallos.',
      },
      {
        id: 'project-structure',
        title: 'Estructura Modular',
        description: 'Organización profesional de carpetas: /screens, /components, /assets, /navigation.',
      },
      {
        id: 'tanstack-query',
        title: 'React Query (TanStack Query)',
        description: 'Gestión profesional de estado de servidor, almacenamiento en caché y sincronización automática.',
      },
      {
        id: 'multimedia',
        title: 'Expo Video & Audio',
        description: 'Reproducción y manejo de recursos multimedia utilizando la suite moderna expo-video.',
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Conceptos Avanzados de React Native',
    iconName: 'hardware-chip-outline',
    description: 'Arquitectura interna, rendimiento de alto nivel, módulos nativos, animaciones y despliegue.',
    items: [
      {
        id: 'native-modules',
        title: 'Integración con Native Modules',
        description: 'Acceso directo a APIs del sistema operativo (Android/iOS) no expuestas por defecto.',
      },
      {
        id: 'global-state',
        title: 'Estado Global Escalable',
        description: 'Uso de Zustand, Redux Toolkit o Jotai para flujos complejos de datos.',
      },
      {
        id: 'performance',
        title: 'Optimización de Rendimiento',
        description: 'Uso de React.memo, useMemo, useCallback y optimización de listas de gran tamaño.',
      },
      {
        id: 'animations',
        title: 'Animaciones Fluidas',
        description: 'Uso de React Native Reanimated para ejecutar transformaciones directamente en el hilo de UI.',
      },
      {
        id: 'testing',
        title: 'Testing',
        description: 'Pruebas unitarias con Jest y pruebas e2e de interfaz con herramientas como Detox.',
      },
      {
        id: 'gestures',
        title: 'Manejo Avanzado de Gestos',
        description: 'Interacciones táctiles complejas con react-native-gesture-handler.',
      },
      {
        id: 'notifications',
        title: 'Notificaciones y Background',
        description: 'Push notifications con Firebase/EAS y ejecución de tareas en segundo plano.',
      },
      {
        id: 'sensors',
        title: 'Sensores del Dispositivo',
        description: 'Lectura de hardware: Cámara, GPS, giroscopio y acelerómetro.',
      },
      {
        id: 'deploy',
        title: 'Compilacion y Deploy (EAS)',
        description: 'Generación de binarios (APK/AAB/IPA) y distribución en Play Store y App Store.',
      },
      {
        id: 'new-architecture',
        title: 'The New Architecture (Fabric & TurboModules)',
        description: 'Evolución de React Native: eliminación del Bridge tradicional e integración directa vía C++ (JSI).',
      },
      {
        id: 'expo-modules-sdk',
        title: 'Expo Modules SDK',
        description: 'Creación de módulos nativos modernos escribiendo Swift y Kotlin.',
      },
      {
        id: 'skia',
        title: 'React Native Skia',
        description: 'Motor de renderizado de gráficos 2D de alto rendimiento para efectos visuales avanzados.',
      },
      {
        id: 'micro-frontends',
        title: 'Module Federation en Mobile',
        description: 'División de aplicaciones de gran escala en módulos o micro-frontends independientes.',
      },
    ],
  },
];