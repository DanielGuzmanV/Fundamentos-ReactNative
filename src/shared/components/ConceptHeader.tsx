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
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 25,
    borderColor: '#9a97aa',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12
  },
  subTitle: {
    fontSize: 16, 
    textAlign: 'center', 
    color: '#666', 
    lineHeight: 24, 
  },
  divider: {
    height: 4,
    width: 100,
    backgroundColor: '#007AFF',
    marginTop: 10,
    borderRadius: 2,
  },
});