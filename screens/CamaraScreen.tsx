import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { getStorage, ref, uploadBytes } from "firebase/storage";

import * as ImagePicker from 'expo-image-picker';
import { storage } from '../config/Config';
export default function CamaraScreen() {
    const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } 
  };
  
    async function subir(){ 
        
    const storageRef = ref(storage, 'some-child'); 
    
    const response = await fetch(image);
    const blob = await response.blob();
    uploadBytes(storageRef, blob).then((snapshot) => { 
      console.log('Uploaded a blob or file!'); 
    }); 
        }
  return (
    <View style={styles.container}>
     <Button title="IMAGE DESDE CAMARA" onPress={pickImage} color={'#AB274F'} />
     {image && <Image source={{uri: image}} style={styles.image} />}
     <Button title='SubirImagen' color={"#841584"} onPress={()=>subir()}/>
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color:'pink',
      backgroundColor:'pink'
    },
    image: {
      width: 200,
      height: 400,
    },
  });