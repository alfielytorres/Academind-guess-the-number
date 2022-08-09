import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View>
      <Title>Game is over</Title>
      <Text style={styles.text}>
        Opponent guessed <Text style={styles.highlight}>{userNumber}</Text> in
        <Text style={styles.highlight}> {roundsNumber}</Text> rounds
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "inter-regular",
  },
  highlight: {
    color: "white",
    fontFamily: "inter-bold",
  },
});
