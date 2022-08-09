import { Text, View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../screens/constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
  container: {

    borderColor: Colors.primary,
    padding: deviceWidth < 380 ? 12 : 24,
    marginTop:deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: '#191414',
    borderRadius:100,

    alignItems: 'center',
    textAlign: 'center'
  },
  title: {

    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",

   
  },
});
