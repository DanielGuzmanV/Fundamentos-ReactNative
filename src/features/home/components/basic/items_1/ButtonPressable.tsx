import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
  nameIcon: ComponentProps<typeof Ionicons>['name']; 
  titleButton: string;
}

export const ButtonPressable = ({onPress, nameIcon, titleButton}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Ionicons name={nameIcon} size={18} color="#FFF" />
      <TextCustom style={styles.buttonText}>
        {titleButton}
      </TextCustom>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 4,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
})