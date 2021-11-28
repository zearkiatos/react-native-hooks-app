import React, { useMemo, useReducer } from "react";
import { View, Text } from "react-native";
const users = [
  {
    name: "user 1",
    age: 2
  },
  {
    name: "user 2",
    age: 3
  }
];
const Memo = () => {
  const totalAge = useMemo(() => {
    let age = 0;
    users.forEach((user) => {
      age = age + user.age;
    });
    return age;
  }, [users]);
  return (
    <View>
      <Text>
          {totalAge}
      </Text>
    </View>
  );
};

export default Memo;
