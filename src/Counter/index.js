import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onPressHandle = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <Text onPress={onPressHandle} style={styles.text}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        padding: 5,
        width: 200,
        height: 200,
        alignContent: 'center',
        textAlign: 'center'
    },
    text: {
        fontSize: 100,
        color: 'white'
    }
});

export default Counter;