import { createContext, useContext, ReactNode, useState } from 'react';
import { Usuario } from '../modeloes/Usuario';


export const contextoUsuario = createContext<any>(null); 

interface ViewReact { 
  children: ReactNode;
}

export default function ContextProvider({ children }: ViewReact) {
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
  const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);

  const agregarUsuario = () => {
    const body: Usuario = {
      nombre,
      apellido,
      correo,
      telefono,
      fechaNacimiento,
    };
    setListaUsuario([...listaUsuario, body]);
  };

  return (
    <contextoUsuario.Provider value={{
      nombre,
      setNombre,
      apellido,
      setApellido,
      correo,
      setCorreo,
      telefono,
      setTelefono,
      fechaNacimiento,
      setFechaNacimiento,
      listaUsuario,
      agregarUsuario,
    }}>
      {children}
    </contextoUsuario.Provider>
  );
}

export const useContextUsuario = () => {
  return useContext(contextoUsuario);
}
