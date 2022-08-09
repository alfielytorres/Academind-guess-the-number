import { Text, View, StyleSheet } from "react-native";

function ButtonContainer({children}) {
  return (
 
    <View style={styles.buttonsContainer}>{children}</View>
      
  );
}

export default ButtonContainer;


const styles = StyleSheet.create({
 
    buttonsContainer: {
      flexDirection: "row",
    }
  });
  