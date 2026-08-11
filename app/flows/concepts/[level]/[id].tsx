import { ConceptDetailScreen } from '@/src/features/home/screens/ConceptDetailScreen';
import { useLocalSearchParams } from 'expo-router';

export default function LessonDetailScreen() {
  const { level, id } = useLocalSearchParams<{ level: string; id: string }>();

  return <ConceptDetailScreen levelId={level} conceptId={id}/>
}