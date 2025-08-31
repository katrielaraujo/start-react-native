import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {

    const [name, setName] = useState<string>()

    function handleNext() {
        router.navigate('/dashboard')
    }

    function onChangeText(text: string) {
        setName(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>

            <Input onChangeText={setName} />

            <Button title="Continuar" onPress={handleNext} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32,
        gap: 16
    },
    title: {
        fontSize: 24,
        color: "red",
        fontWeight: "bold",
    }
})