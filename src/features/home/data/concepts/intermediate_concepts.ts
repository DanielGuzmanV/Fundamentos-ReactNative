import { ConceptLevel } from "../../types/concept.types";

export const intermediateConcepts: ConceptLevel = {
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
}