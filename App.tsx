import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CameraView as ExpoCamera, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import CameraView from './src/components/CameraView/CameraView';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [type, setType] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [hasMediaPermission, setHasMediaPermission] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!permission) {
        const { granted } = await requestPermission();
        setHasPermission(granted);
      } else {
        setHasPermission(permission.granted);
      }
    })();

    (async () => {
      const {status} = await MediaLibrary.requestPermissionsAsync()
      setHasMediaPermission(status === 'granted')
      console.log(status);
      
    })()

  }, [permission]);

  function flipCamera() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }

  // if (!hasPermission) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Precisamos da sua permissão para mostrar a câmera</Text>
  //       <TouchableOpacity onPress={requestPermission} style={styles.button}>
  //         <Text>Abrir a Câmera</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  if (hasMediaPermission === false || null) {
    return (
      <View style={styles.container}>
        <Text>Você não tem permissão de mídia.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView type={type} onFlipCamera={flipCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
});
