import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useContextUsuario } from '../context/ContextProvider';

export default function FormularioContacto() {
  const {
    nombre,
    apellido,
    telefono,
    correo,
    fechaNacimiento,
    setNombre,
    setApellido,
    setTelefono,
    setCorreo,
    setFechaNacimiento,
    agregarUsuario,
  } = useContextUsuario();

  const handleAgregarUsuario = () => {
    agregarUsuario();
    alert("Usuario agregado exitosamente");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario del Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={text => setApellido(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        keyboardType="phone-pad"
        onChangeText={text => setTelefono(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        keyboardType="email-address"
        onChangeText={text => setCorreo(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento (YYYY-MM-DD)"
        value={fechaNacimiento}
        onChangeText={text => setFechaNacimiento(text)}
      />

      <Button title="Agregar Usuario" onPress={handleAgregarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
