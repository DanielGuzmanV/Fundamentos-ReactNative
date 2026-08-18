import { TextCustom, ViewCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { ConceptItem } from "../types/concept.types";

interface Props {
  item: ConceptItem;
  handleSelectTopic: (id: string) => void;
  levelColor: string;
  index: number;
}

export const ConceptLevelCard = ({item, handleSelectTopic, levelColor, index}: Props) => {
  return (
    <Pressable
      onPress={() => handleSelectTopic(item.id)}
      style={({ pressed }) => [styles.cardPressable, pressed && styles.pressed]}
    >
      <ViewCustom style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.badge, {backgroundColor: `${levelColor}1A`}]}>
            <TextCustom style={[styles.badgeText, {color: levelColor}]}>
              {index + 1}
            </TextCustom>
          </View>
          <TextCustom style={styles.itemTitle}>{item.title}</TextCustom>
        </View>
        <TextCustom style={styles.itemDescription}>{item.description}</TextCustom>
        <View style={styles.cardFooter}>
          <TextCustom style={[styles.actionText, {color: levelColor}]}>
            Ver concepto
          </TextCustom>
          <Ionicons name="chevron-forward" size={14} color={levelColor} />
        </View>
      </ViewCustom>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardPressable: { borderRadius: 12 },
  pressed: { opacity: 0.8, transform: [{ scale: 0.99 }] },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgb(125, 124, 124)',
  },
    cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 10 },
  badge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontSize: 12, fontWeight: 'bold'},
  itemTitle: { fontSize: 16, fontWeight: '600', flex: 1 },
  itemDescription: { fontSize: 13, opacity: 0.7, lineHeight: 18, marginBottom: 12 },
  cardFooter: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: 4,
  },
  actionText: { fontSize: 12, fontWeight: '600'},
})