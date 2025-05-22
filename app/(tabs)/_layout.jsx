import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        // backgroundColor: "black",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      },
      tabBarActiveTintColor: "#fff",
      tabBarActiveBackgroundColor: "#ff7f50",

      
    }}>
      <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: ({ color }) => <MaterialIcons name="self-improvement" size={24} color={color} /> }} />
      <Tabs.Screen name="resume" options={{ title: 'Resume', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="typewriter" size={24} color={color} /> }} />
      <Tabs.Screen name="portfolio" options={{ title: 'Portfolio', tabBarIcon: ({ color }) => <FontAwesome5 name="file-export" size={24} color={color} /> }} />
      <Tabs.Screen name="contact" options={{ title: 'Contact', tabBarIcon: ({ color }) => <AntDesign name="contacts" size={24} color={color} /> }} />
    </Tabs>

    
    
  );
}
