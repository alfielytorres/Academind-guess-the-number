import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./screens/constants/colors";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRound, setGameRound] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function pickedNumberHandler(number) {
    setUserNumber(number);
    setGameOver(false);
  }

  function onStartNewGameHandler() {
    setUserNumber(null);
    setGameRound(0);

  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGameRound(numberOfRounds);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={gameRound}
        onStartNewGame={onStartNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      style={styles.root}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[Colors.primary, "#000000"]}
    >
      <SafeAreaView>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


