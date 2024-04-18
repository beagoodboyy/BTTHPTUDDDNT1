import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function Project4() {
    const [pressCount, setPressCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>You've pressed the button: {pressCount} time(s)</Text>
            <Button 
                title={`Pressed ${pressCount} time(s)`}
                onPress={() => setPressCount(pressCount + 1)}
                color="#99004d"
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});