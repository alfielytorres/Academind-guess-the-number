import { Text, View, StyleSheet, Alert, FlatList, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

minBoundary = 1;
maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(gameRounds.length);
      setGameRounds(null);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    console.log(minBoundary, maxBoundary, currentGuess);

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGameRounds((prev) => [...prev, newRandomNumber]);
  }

  return (
    <View>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <Title>Higher or Lower?</Title>
          {/* + -  */}
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" />
            </PrimaryButton>
          </View>
        </Card>
        <FlatList
          style={styles.list}
          data={gameRounds}
          renderItem={(itemData) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>
                #{itemData.index + 1} {itemData.item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;
const deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  list: {

  },
  text: {
    color: "white",
  },
  itemContainer: {
    marginTop: deviceWidth <380? 16: 32,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#191414",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 0.25,
  },
});
