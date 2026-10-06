import { TextCustom, ViewCustom } from "@/src/shared/components/Themed";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ButtonProfileProps } from "../../../components/basic/items_3/ButtonProfileProps";
import { UserProfileCard } from "../../../components/basic/items_3/UserProfileCard";

export default function PropsScreen () {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  const roles = ['Frontend Dev', 'Mobile Engineer', 'UI/UX Designer'];
  const colors = ['#34C759', '#5856D6', '#FF9500'];

  const toggleRole = () => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }
  
  return (
    <View style={styles.container}>
      <TextCustom style={styles.sectionTitle}>
        1. Flujo de Datos Padre a Hijo
      </TextCustom>
      <TextCustom style={styles.sectionSub}>
        Cambia los controles del componente Padre para actualizar las{' '}
        <TextCustom style={styles.inlineCode}>props</TextCustom> recibidas por el Hijo:
      </TextCustom>

      {/* Componnente hijo */}
      <View style={styles.controlsCard}>
        <TextCustom style={styles.controlsTitle}>Componente hijo consumiendo Props:</TextCustom>
        <UserProfileCard
          name="Alex Dev"
          role={roles[roleIndex]}
          status={isOnline ? 'online' : 'offline'}
          badgeColor={colors[roleIndex]}
        />
      </View>

      {/* Controles del Padre */}
      <ViewCustom style={styles.controlsCard}>
        <TextCustom style={styles.controlsTitle}>Controles del Padre:</TextCustom>

        <ButtonProfileProps
          title="Cambiar Rol y Color"
          iconName="swap-horizontal"
          onPress={toggleRole}

        />

        <ButtonProfileProps
          title={`Estado: ${isOnline ? 'Online' : 'Offline'}`}
          iconName="power"
          onPress={() => setIsOnline(!isOnline)}
          style={{ backgroundColor: '#5856D6', marginTop: 10 }}
        />
      </ViewCustom>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {gap: 12},
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  sectionSub: { fontSize: 13, opacity: 0.7, lineHeight: 18 },
  inlineCode: { fontFamily: 'monospace', fontWeight: 'bold', color: '#34C759' },
  profileCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  controlsCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 10,
  },
  controlsTitle: { fontSize: 12, fontWeight: '700', opacity: 0.6 },
  btn: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnSecondary: { backgroundColor: '#5856D6' },
  btnPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  btnText: { color: '#FFF', fontWeight: '600', fontSize: 13 },
})