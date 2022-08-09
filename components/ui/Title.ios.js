import { Text, View, StyleSheet } from "react-native";

function Title({children}) {
  return (
 
      <Text style={styles.title}>{children}</Text>
      
  );
}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize:24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'inter-bold',
   
        padding:8,
        margin: 8
    }
})
