import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;

  const handleLogout = () => {
    console.log('Cerrando Sesion');
    router.replace('/(auth)/login');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={[
        styles.menuContainer,
        {paddingTop: insets.top + 20,}
      ]}>
        <Text style={[styles.menuText, { color: textColor }]}>
          Menu principal
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        {/* Renderiza las opciones automáticas (Inicio, Conceptos, etc.) */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Sección inferior fija para Cerrar Sesión */}
      <View style={[
        styles.logoutContainer,
        {
          paddingBottom: insets.bottom + 30,
          borderTopColor: colorScheme === 'dark' ? '#333' : '#ccc'
        }
      ]}>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={22} color={textColor}/>
          <Text style={[styles.logoutText, { color: textColor }]}>
            Cerrar Sesión
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoutContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopWidth: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '700',
  }
});