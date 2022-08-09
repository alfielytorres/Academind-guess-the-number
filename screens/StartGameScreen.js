import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
function StartGameScreen({onPickedNumber}) {
  const [enteredText, setEnteredText] = useState('');

  function enteredTextHandler(text) {
    setEnteredText(text);
  }

  function resetInputHandler() {
    setEnteredText('');
  }


  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredText);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Error", "not a valid number", [{text: 'Okay', style:'destructive', onPress: resetInputHandler}]);
      return;
    }
    console.log(chosenNumber);

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Enter your number </Title>
    <Card>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        value={enteredText}
        keyboardType="number-pad"
        onChangeText={enteredTextHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
      </View>
  );
}

export default StartGameScreen;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
 container:{
  marginTop: deviceWidth < 480? 64: 16,
 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
