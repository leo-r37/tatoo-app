import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

const Bar = () => {

  const onPressButton = () => {
    Alert.alert('Panel de admin', 'Debes iniciar sesión para acceder al panel de administrador', [
        {
            text: 'Cancelar',
            onPress: () => console.log('cancelar'),
            style: "cancel"
        },
        // {
        //     text: 'Iniciar sesión',
        //     onPress: () => console.log('iniciar sesión'),
        // }
    ])
}

  return (
    <View style={s.container}>
      <Button
        onPress={onPressButton}
        title="Admin"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Bar;

const s = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "80%",
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
