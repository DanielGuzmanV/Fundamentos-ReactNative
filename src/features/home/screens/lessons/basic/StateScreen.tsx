import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonProfileProps } from '../../../components/basic/items_3/ButtonProfileProps';

export default function StateScreen() {
  // 1. Estado para un contador simple (Número)
  const [count, setCount] = useState(0);

  // 2. Estado para un objeto (Inmutabilidad)
  const [user, setUser] = useState({ name: 'Daniel', role: 'Frontend Dev' });

  // 3. Estado booleano (Toggle)
  const [showDetails, setShowDetails] = useState(false);

  // Manipulación correcta de objetos en estado
  const handleChangeRole = () => {
    const roles = ['Frontend Dev', 'Mobile Engineer', 'Fullstack Dev', 'Backend Dev'];
    const nextRole = roles[(roles.indexOf(user.role) + 1) % roles.length];

    setUser((prevUser) => ({
      ...prevUser,
      role: nextRole,
    }));
  };

  return (
    <View style={styles.container}>
      {/* EJEMPLO 1: Contador Básico */}
      <TextCustom style={styles.sectionTitle}>1. Estado Primitivo (Número)</TextCustom>
      <TextCustom style={styles.sectionSub}>
        Al presionar los botones cambiamos <TextCustom style={styles.inlineCode}>count</TextCustom> y React re-renderiza el valor en pantalla:
      </TextCustom>

      <ViewCustom style={styles.card}>
        <TextCustom style={styles.counterValue}>{count}</TextCustom>
        
        <View style={styles.rowButtons}>
          <ButtonProfileProps
            title="-1"
            iconName="remove-circle-outline"
            style={[styles.btnSecondary, styles.btnFlex]}
            onPress={() => setCount((prev) => prev - 1)}
          />
          <ButtonProfileProps
            title="Reset"
            iconName="refresh-outline"
            style={[styles.btnDanger, styles.btnFlex]}
            onPress={() => setCount(0)}
          />
          <ButtonProfileProps
            title="+1"
            iconName="add-circle-outline"
            style={styles.btnFlex}
            onPress={() => setCount((prev) => prev + 1)}
          />
        </View>
      </ViewCustom>

      {/* EJEMPLO 2: Inmutabilidad con Objetos */}
      <TextCustom style={styles.sectionTitle}>2. Estado Compuesto (Objeto)</TextCustom>
      <TextCustom style={styles.sectionSub}>
        Para actualizar un objeto debes copiar las propiedades existentes con el operador spread (<TextCustom style={styles.inlineCode}>...user</TextCustom>):
      </TextCustom>

      <ViewCustom style={styles.card}>
        <View style={styles.userInfo}>
          <TextCustom style={styles.userName}>Nombre: {user.name}</TextCustom>
          <TextCustom style={styles.userRole}>Rol actual: {user.role}</TextCustom>
        </View>

        <ButtonProfileProps
          title="Cambiar Rol"
          iconName="briefcase-outline"
          onPress={handleChangeRole}
        />
      </ViewCustom>

      {/* EJEMPLO 3: Toggle / Renderizado Condicional */}
      <TextCustom style={styles.sectionTitle}>3. Interruptor Booleano</TextCustom>
      <TextCustom style={styles.sectionSub}>showDetails es: <TextCustom style={styles.inlineCode}>{showDetails ? 'true' : 'false'}</TextCustom></TextCustom>

      <ViewCustom style={styles.card}>
        <ButtonProfileProps
          title={showDetails ? 'Ocultar Explicación' : 'Mostrar Explicación'}
          iconName={showDetails ? 'chevron-up-outline' : 'chevron-down-outline'}
          style={styles.btnSecondary}
          onPress={() => setShowDetails((prev) => !prev)}
        />

        {showDetails && (
          <View style={styles.detailsBox}>
            <Ionicons name="information-circle-outline" size={20} color="#34C759" />
            <TextCustom style={styles.detailsText}>
              ¡El re-renderizado reactivo destruye o crea este elemento visual dependiendo de si{' '}
              <TextCustom style={styles.inlineCode}>showDetails</TextCustom> es true o false.
            </TextCustom>
          </View>
        )}
      </ViewCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginTop: 4 },
  sectionSub: { fontSize: 13, opacity: 0.7, lineHeight: 18 },
  inlineCode: { fontFamily: 'monospace', fontWeight: 'bold', color: '#34C759' },
  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 12,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34C759',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  btnFlex: {
    flex: 1,
  },
  btnSecondary: {
    backgroundColor: '#5856D6',
  },
  btnDanger: {
    backgroundColor: '#FF3B30',
  },
  userInfo: { gap: 4 },
  userName: { fontSize: 15, fontWeight: '600' },
  userRole: { fontSize: 13, opacity: 0.7 },
  detailsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
    marginTop: 4,
  },
  detailsText: {
    fontSize: 12,
    flex: 1,
    lineHeight: 18,
  },
});