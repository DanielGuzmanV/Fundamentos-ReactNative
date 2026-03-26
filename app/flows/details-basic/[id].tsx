import { LessonSwitcher } from '@/src/features/concepts/screens/basic-concept/LessonSwitcher';
import { useLocalSearchParams } from 'expo-router';

export default function LessonRoute() {
  const { id } = useLocalSearchParams();

  // Le pasamos el ID al componente que decide qué mostrar
  return <LessonSwitcher id={id as string} />;
}