import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ACTION_TYPES from "../../types/actionTypes";
const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onPressPlus = () => {
    dispatch({
      type: ACTION_TYPES.INCREMENT
    });
  };

  const onPressMinium = () => {
    dispatch({
      type: ACTION_TYPES.DECREMENT
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.count} onPress={onPressPlus}>+</Text>
      <Text style={styles.text}>{state.count}</Text>
      <Text style={styles.count} onPress={onPressMinium}>-</Text>
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

export default UseReducer;
