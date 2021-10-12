import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useState } from "react";

const CoinScreen = () => {
  const [wallet, setWallet] = useState(0);
  const [color, setColor] = useState([]);

  function addCoin() {
    setWallet(wallet + 1);
  }

  function betAll() {
    if (Math.random() < 0.5) {
      setWallet(wallet * 2);
      setColor("#006400");
    } else {
      setWallet(wallet / 2);
      setColor("#8B0000");
    }
  }

  return (
    <View style={[{ justifyContent: "center" }, { alignItems: "center" }]}>
      <Button title="Ganhar Uma Moeda!" onPress={() => addCoin()}></Button>
      <Button title="Apostar!" onPress={() => betAll()}></Button>

      <Text
        style={{
          color: `${color}`,
          fontSize: "50px",
        }}
      >
        Eu tenho {wallet} moedas!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CoinScreen;
