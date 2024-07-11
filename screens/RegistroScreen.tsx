import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegistroScreen({ navigation }: any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Login');
                // Resetear los campos después del registro exitoso
                setCorreo('');
                setContrasenia('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                // Manejar el error aquí
                Alert.alert('Error', errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRO</Text>

            <TextInput
                style={styles.input}
                placeholder='Ingresa tu correo electrónico'
                onChangeText={(texto) => (setCorreo(texto))}
                keyboardType='email-address'
                value={correo} // Asignar el valor del estado
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresa contraseña'
                onChangeText={(texto) => (setContrasenia(texto))}
                value={contrasenia} // Asignar el valor del estado
                secureTextEntry={true} // Para ocultar la contraseña
                autoCapitalize='none'
            />

            <Button title='Registrar' onPress={() => registro()} color={"#841584"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        fontSize:18,
        width: '100%',
        height: 50,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
});

