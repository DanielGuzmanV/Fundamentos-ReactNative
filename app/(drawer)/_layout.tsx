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
        {/* 1. Inicio */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Inicio',
            title: 'Bienvenido',
            drawerIcon: ({color}) => <Ionicons name='home-outline' size={22} color={color}/>
          }}
        />

        {/* 2. Conceptos */}
        <Drawer.Screen
          name="(tabs)" 
          options={{
            drawerLabel: 'Conceptos',
            title: 'Aprendizaje',
            drawerIcon: ({ color }) => <Ionicons name="book-outline" size={22} color={color} />,
          }}
        />

        {/* 3. Ejemplos */}
        <Drawer.Screen
          name="examples" 
          options={{
            drawerLabel: 'Ejemplos',
            title: 'Código Vivo',
            drawerIcon: ({ color }) => <Ionicons name="code-working-outline" size={22} color={color} />,
          }}
        />

        {/* 4. Pruebas */}
        <Drawer.Screen
          name="tests" 
          options={{
            drawerLabel: 'Pruebas',
            title: 'Laboratorio',
            drawerIcon: ({ color }) => <Ionicons name="flask-outline" size={22} color={color} />,
          }}
        />

        {/* 5. APIs */}
        <Drawer.Screen
          name="apis" 
          options={{
            drawerLabel: 'APIs',
            title: 'Conexiones Externas',
            drawerIcon: ({ color }) => <Ionicons name="cloud-upload-outline" size={22} color={color} />,
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  )
}