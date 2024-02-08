import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from '../pages/Home'
import Cursos from '../pages/Cursos';
import Contato from '../pages/Contato'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator
      
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: 'darkred', 
        tabBarInactiveTintColor: 'darkgray', 
        tabBarHideOnKeyboard:  true, 
        tabBarShowLabel: false, 
        
        tabBarStyle: {
          backgroundColor: '#7e7575', 
        },
      }}
      >

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name='home' color={color} size={size} />
            }
          }}
        />

        <Tab.Screen
          name='Cursos'
          component={Cursos}
          options={{
            tabBarIcon:({color, size})=>{
              return <FontAwesome5 name="file-alt" color={color} size={size}/>
            
            }
          }}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarIcon:({color, size})=>{
              return <FontAwesome5 name="phone-alt" color= {color} size={size}/>;
            }
          }}
        />

      </Tab.Navigator>
  
  )
}