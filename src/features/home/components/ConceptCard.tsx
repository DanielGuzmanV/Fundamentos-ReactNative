import { TextCustom, ViewCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { ConceptDifficulty, ConceptLevel } from "../types/concept.types";

interface ConceptCardProps {
  level: ConceptLevel;
  onPress: (levelId: ConceptDifficulty) => void;
}

const LEVEL_COLORS: Record<ConceptDifficulty, string> = {
  basic: '#34C759',
  intermediate: '#FF9500',
  advanced: '#FF3B30',
}

export const ConceptCard = ({level, onPress}: ConceptCardProps) => {
  const levelColor = LEVEL_COLORS[level.id];
  const itemCount = level.items.length;

  return (
    <Pressable
      onPress={() => onPress(level.id)}
      style={({ pressed }) => [
        styles.pressableContainer,
        pressed && styles.pressed,
      ]}
    >
      <ViewCustom style={styles.card}>
        {/* Header de la card: Icono + Titulo y Tag */}
        <View style={styles.header}>
          <View style={[styles.iconBadge, { backgroundColor: `${levelColor}1A`}]}>
            <Ionicons name={level.iconName} size={24} color={levelColor}/>
          </View>

          <View style={styles.titleContainer}>
            <TextCustom style={styles.title}>{level.title}</TextCustom>
            <View style={[styles.tag, {borderColor: levelColor}]}>
              <TextCustom style={[styles.tagText, {color: levelColor}]}>
                {itemCount} {itemCount === 1 ? 'tema' : 'temas'}
              </TextCustom>
            </View>
          </View>
        </View>

        {/* Descripcion */}
        <TextCustom style={styles.description}>
          {level.description}
        </TextCustom>

        {/* Footer / Accion */}
        <View style={styles.footer}>
          <TextCustom style={[styles.actionText, {color: levelColor}]}>
            Explorar modulo
          </TextCustom>
          <Ionicons name="chevron-forward" size={16} color={levelColor}/>
        </View>
      </ViewCustom>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressableContainer: {
    marginBottom: 16,
    borderRadius: 16,
  },
  pressed: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgb(174, 171, 171)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    opacity: 0.7,
    lineHeight: 18,
    marginBottom: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
  }
})