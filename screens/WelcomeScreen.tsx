import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../config/Config';

export default function WelcomeScreen() {

  function Logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Saliendo...");
      }).catch((error) => {
        // An error happened.
        console.error(error);
        });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Button title='Logout' onPress={() => Logout()} color="#841584" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
});
