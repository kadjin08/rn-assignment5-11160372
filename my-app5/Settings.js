import React ,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, Switch } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext';


function Settings(){
   // const [isDarkTheme, setIsDarkTheme] = useState(false);
   // const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
   const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const {toggleTheme} = useTheme();
   
   // const dynamicStyles = StyleSheet.create({
   //    container: {
   //       alignContent: 'center',
   //  alignItems: 'center',
   //  marginTop: 60, 
   //  padding: 15,
   //      flex: 1,
   //      backgroundColor: isDarkTheme ? '#333' : '#fff', 
   //    },
   //    text: {
   //      color: isDarkTheme ? '#fff' : '#000', 
   //    },
   //    content: {
   //      flexDirection: 'row',
   //      justifyContent: 'space-between',
   //      alignItems: 'center',
   //      padding: 20,
   //    },
   //    theme:{      
   //       backgroundColor: isDarkTheme ? '#333' : 'white',}

   //  });

  return (
<View style={styles.container}>
  <Text style={{alignContent: 'center', justifyContent:'center',fontSize: '30', }}>Settings</Text>

<View style={styles.setting}>
<View style={styles.content}>
<Text>Language</Text>
<MaterialIcons name='arrow-right' size={50} style={{}}/>
</View>
<View style={styles.content}>
<Text>My Profile</Text>
<MaterialIcons name='arrow-right' size={50} style={{}}/>
</View>
<View style={styles.content}>
<Text>Contact Us</Text>
<MaterialIcons name='arrow-right' size={50} style={{}}/>
</View>
<View style={styles.content}>
<Text>Change Password</Text>
<MaterialIcons name='arrow-right' size={50} style={{}}/>
</View>

<View style={styles.content}>
<Text>Privacy Policy</Text>
<MaterialIcons name='arrow-right' size={50} style={{}}/>
</View>
</View>


<View style={styles.theme}>
<Text style={{ fontSize: 25}}>Theme</Text>
<Switch
        trackColor={{ false: 'blue', true: 'green' }}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor="gray"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /></View>

      

</View>


  

  );
}

export default Settings;

const styles = StyleSheet.create({
 container:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 60, 
    padding: 15,
 }, 

 setting:{
   marginTop: 60,
   padding: 10,
   alignContent: 'center',
    width: '100%',
 
 }, 
 content:{
   flexDirection: 'row',
   alignItems: 'center',  
   justifyContent:'space-between',
   width: '100%',
   padding: 5,
   borderBottomColor: 'black',
   borderBottomWidth: 0.3,
 }, 
 theme: {
   padding: 20,
   marginTop: 40,
   justifyContent:'space-between',
   width: '100%',
   flexDirection: 'row',
   alignItems: 'center',
 }
 
});