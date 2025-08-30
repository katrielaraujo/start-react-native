import { View, Text, StyleSheet, Alert, Button } from 'react-native';

export default function Index() {
    function handleMessage() {
        const name = "Katriel"
        Alert.alert(`Olá, ${name}!`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, Katriel!</Text>

            <Button title="Enviar" onPress={handleMessage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32
    },
    title: {
        fontSize: 24,
        color: "red",
        fontWeight: "bold",
    }
})