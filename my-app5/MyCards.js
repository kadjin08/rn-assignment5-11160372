import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
;

export default function Settings() {
  return (
    <SafeAreaView>
   <ScrollView>

<View style={styles.container}>
  
<Text>nothing to see here</Text>

</View>
   </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 50,
    margin: 10,
    borderRadius: 10,
 }
});
