import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JsonPlaceholderApiUserRepository from '../../Users/Infrastructure/JsonPlaceholderApiUserRepository';
import UserEvent from '../../Users/Application/UserEvent';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async () => {
        const userEvent = new UserEvent(new JsonPlaceholderApiUserRepository());
        const usersFetched = await userEvent.getUsers();
        setUsers(usersFetched);
        usersFetched && setLoading(false);
    };
    useEffect(() => {
        fetchUsers();
    }, [users]);
    return (
        <View style={styles.container}>
            {loading
                ? <Text>loading...</Text>
                : <Text style={styles.text}>{users[0].name}</Text>}
        </View>
    )
};

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
        fontSize: 23,
        color: 'white'
    }
});

export default Users;