import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import MyCards from './MyCards';
import { ThemeProvider } from './ThemeContext';



const Tab = createBottomTabNavigator();
function App() {
  return (

    <ThemeProvider>
    
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false, 
        tabBarLabel: 'Home',
  tabBarIcon: ({ color, size }) => (
   <MaterialIcons name="home" color={color} size={size} />
)
}}/>
        <Tab.Screen name="My Cards" component={MyCards} options={{headerShown: false,
        tabBarLabel: 'My Cards',
  tabBarIcon: ({ color, size }) => (
   <MaterialIcons name="credit-card" color={color} size={size} />
  )
 }} />

        <Tab.Screen name="Statistics" component={MyCards} options={{headerShown: false,
        tabBarLabel: 'Statistics',
  tabBarIcon: ({ color, size }) => (
   <MaterialIcons name="analytics" color={color} size={size} />
  )
 }} />
        <Tab.Screen name="Settings" component={Settings


        } options={{headerShown: false,
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
         <MaterialIcons name="settings" color={color} size={size} />
        )
       }} />
      </Tab.Navigator>
      </NavigationContainer>
      </ThemeProvider>
  );
}

export default App;

// options={{
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ color, size }) => (
//     <MaterialCommunityIcons name="home" color={color} size={size} />
//   ),
// }}