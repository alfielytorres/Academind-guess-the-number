import { Text, View, StyleSheet } from "react-native";

import Colors from "../../screens/constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {

    borderColor: Colors.primary,
    padding: 4,
    backgroundColor: '#191414',
    borderRadius:100,
  
    margin: 24,
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",

   
  },
});
