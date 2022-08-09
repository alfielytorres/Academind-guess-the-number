import { Text, View, StyleSheet } from "react-native";

function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
      
  );
}

export default Card;



const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 16,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: "#191414",
      borderRadius: 8,
      shadowColor: "black",
      shadowOpacity: 4,
      shadowOffset: { width: 4, height: 4 },
      shadowRadius: 12,
      shadowOpacity: 0.25,
    }
  });
  