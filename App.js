import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [kilometer, setKilometer] = useState(0);
  const [meter, setMeter] = useState(0);
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);


  function onChangeKilo(e) {
    const value = parseFloat(e);
    const c = value * 1000;
    setMeter(c);
  }

  function onChangeMeter(e) {
    const value = parseFloat(e);
    const f = value / 1000;
    setKilometer(f);
  }
  function onChangeCelcius(e) {
    const value = parseFloat(e);
    const c = value * (9 / 5) + 32;
    setFahrenheit(c);
  }

  function onChangeFarhanhight(e) {
    const value = parseFloat(e);
    const f = (value - 32) * (5 / 9);
    setCelsius(f);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tit}>{meter ? meter : 0} m.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeKilo}
          value={kilometer}
          placeholder="kilometer"
          keyboardType="numeric"
        />
        <Text style={styles.tit}>{kilometer ? kilometer : 0} k.m</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMeter}
          value={meter}
          placeholder="meter"
          keyboardType="numeric"
        />
      </View>
      <View>
      <Text style={styles.tit}>
         {fahrenheit ? fahrenheit : 0} f
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCelcius}
        value={celsius}
        placeholder=" Celsius"
        keyboardType="numeric"
      />
      <Text style={styles.tit}> {celsius ? celsius : 0} c
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFarhanhight}
        value={fahrenheit}
        placeholder="Fahrenheit"
        keyboardType="numeric"
      />
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tit: {
    fontSize: 20,
    paddingTop: 10,
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
