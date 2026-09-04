import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface CustomButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  iconName?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export const CustomButtonItemTwo = ({
  title,
  variant = 'primary',
  iconName,
  onPress,
}: CustomButtonProps) => {
  return (
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          styles[`btn_${variant}`],
          pressed && styles.btnPressed,
        ]}
        onPress={onPress}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            size={16}
            color={variant === 'outline' ? '#34C759' : '#FFF'}
          />
        )}
        <TextCustom
          style={[
            styles.btnText,
            variant === 'outline' && styles.btnTextOutline,
          ]}
        >
          {title}
        </TextCustom>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btn_primary: { backgroundColor: '#34C759' },
  btn_secondary: { backgroundColor: '#5856D6' },
  btn_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#34C759',
  },
  btnPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  btnText: { color: '#FFF', fontWeight: '600', fontSize: 14 },
  btnTextOutline: { color: '#34C759' },
})