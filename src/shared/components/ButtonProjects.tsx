import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;

interface Props {
  routeLink: Href;
  titleBtn: string;
  iconName?: IconName;
  style?: ViewStyle;
}

export const ButtonProjects = ({
  routeLink, 
  titleBtn,
  iconName = "arrow-forward",
  style
}: Props) => {
  const router = useRouter();
  
  return (
    <Pressable 
      onPress={() => router.push(routeLink)}
      style={({pressed}) => [
        styles.button,
        {
          opacity: pressed ? 0.8 : 1,
          transform: [{scale: pressed ? 0.96 : 1}],
        },
        style,
      ]}
    >
      <Text style={styles.buttonText}>{titleBtn}</Text>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={20} color="#fff" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: { 
    backgroundColor: '#007AFF', 
    flexDirection: 'row', 
    paddingVertical: 14, 
    paddingHorizontal: 28, 
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 17, 
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})