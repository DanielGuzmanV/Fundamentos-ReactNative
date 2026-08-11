import ConceptLevelScreen from '@/src/features/home/screens/ConceptLevelScreen';
import { useLocalSearchParams } from 'expo-router';

export default function LevelIndexScreen() {
  const { level } = useLocalSearchParams<{ level: string }>();

  return <ConceptLevelScreen levelId={level}/>
}