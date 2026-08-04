import { ConceptLevel } from "../../types/concept.types";

export const advancedConcepts: ConceptLevel = {
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
}