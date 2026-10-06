import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>; 
}

export const ButtonProfileProps = ({
  title,
  onPress,
  iconName,
  style,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,                       
        pressed && styles.pressed,   
      ]}
    >
      {iconName && (
        <Ionicons name={iconName} size={16} color={'#FFF'} />
      )}
      <TextCustom style={styles.text }>
        {title}
      </TextCustom>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 13,
  },
});