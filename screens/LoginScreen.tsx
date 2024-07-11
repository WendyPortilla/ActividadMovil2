import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Drawer');
        // Resetear los campos después del inicio de sesión exitoso
        setCorreo('');
        setContrasenia('');
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          errorMessage = "La contraseña es incorrecta";
        } else if (errorCode === 'auth/invalid-email') {
          errorMessage = "El correo es incorrecto";
        } else {
          errorMessage = "Ocurrió un error inesperado";
        }

        Alert.alert("Error", errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder='Correo Electrónico'
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
        value={correo} // Asignar el valor del estado
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        onChangeText={(texto) => (setContrasenia(texto))}
        value={contrasenia} // Asignar el valor del estado
        secureTextEntry={true} // Para ocultar la contraseña
        autoCapitalize='none'
      />

      <Button title='Ingresar' onPress={() => login()} color={"#841584"}  />

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.registerLink}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
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
    fontSize:20,
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  registerLink: {
    marginTop: 20,
    color: 'black',
    textDecorationLine: 'underline',
    fontSize:15
  },
});

