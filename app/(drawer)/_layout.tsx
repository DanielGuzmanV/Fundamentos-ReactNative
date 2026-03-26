import CustomDrawerContent from '@/src/shared/components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: '#007AFF',
        }}
      >
        {/* Inicio */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Inicio',
            title: 'Bienvenido',
            drawerIcon: ({color}) => <Ionicons name='home-outline' size={22} color={color}/>
          }}
        />

        {/* Proyectos completos */}
        <Drawer.Screen
          name="projectOne" 
          options={{
            drawerLabel: 'Proyecto 1',
            title: 'Primer proyecto',
            drawerIcon: ({ color }) => <Ionicons name="flask-outline" size={22} color={color} />,
          }}
        />

        {/* Proyectos demos */}
        <Drawer.Screen
          name="(tabs)" 
          options={{
            drawerLabel: 'Demos Tecnicas',
            title: 'Explorar Demos',
            drawerIcon: ({ color }) => <Ionicons name="flask-outline" size={22} color={color} />,
          }}
        />

        {/* Ajustes */}
        <Drawer.Screen
          name="settings" 
          options={{
            drawerLabel: 'Ajustes',
            title: 'Ajustes',
            drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />,
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  )
}