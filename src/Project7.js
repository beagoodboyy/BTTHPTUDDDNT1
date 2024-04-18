import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 5,
    },
});

export default function Project7 () {
    const [name, setName] = useState("");

    return (
        <View style={style.container}>
            <Text style={style.label}>What is your name?</Text>
            <TextInput
                style={style.container}
                placeholder="Jason"
                placeholderTextColor="rgba(0, 0, 0, 0.5"
                onChangeText={(Text) => setName(Text)}
                value={name}
            />
            <Button
                title="Say Hello"
                onPress={() =>{
                    alert(`Hello, ${name}!`);
                    setName("");
                }}
            />
        </View>
    );
};