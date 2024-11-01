import { createContext } from "react";
import {Usuario }from "../modeloes/Usuario";

export const contextoUsuario= createContext ( {


nombre:"",
apellido:"",
correo:"",
telefono:"",
fechaNacimiento:"",
agregarUsuario: ()=>{},
listaUsuario: [] as Usuario[]

})