import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { StyleSheet, Text, View } from 'react-native';

interface ConceptHeaderProps {
  title: string;
  subtitle: string;
}

export const ConceptHeader = ({ title, subtitle }: ConceptHeaderProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.mainTitle, { color: textColor }]}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subtitle}
      </Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  divider: {
    height: 4,
    width: 50,
    backgroundColor: '#007AFF',
    marginTop: 10,
    borderRadius: 2,
  },
});