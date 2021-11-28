import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const CallBack = () => {
  const [count, setCount] = useState(0);

  const onPressPlus = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onPressMinium = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.count} onPress={onPressPlus}>
        +
      </Text>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.count} onPress={onPressMinium}>
        -
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24
  },
  count: {
    fontSize: 50
  }
});

export default CallBack;
