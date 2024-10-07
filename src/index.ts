import { Estudiante } from "./Estudiante";
import recorrerEstudiantes from "./recorrerEstudiantes";
import { insertarEstudiante,actualizarEstudiante,borrarEstudiante } from "./operaciones";
//Definir objetos(literal) estudiante
const estudiante1: Estudiante = {
    nombre : "cristian",
    apellido : "buitrago",
    edad : "20",
    tipoIdentificacion : "CC",
    numeroIdentificacion : "1234567890"
}
console.log (estudiante1);
const estudiante2: Estudiante = {
    nombre : "Lorena",
    apellido : "Rojas",
    tipoIdentificacion : "CC",
    numeroIdentificacion : "10174917"
}
console.log(estudiante2);
const estudiante3: Estudiante = {
    nombre : "Felipe",
    apellido : "Higuera",
    edad : "17",
    tipoIdentificacion : "TI",
    numeroIdentificacion : "51857913"
}
console.log(estudiante3);
const estudiante4: Estudiante = {
    nombre : "Sara",
    apellido : "Nuñez",
    edad : "18",
    tipoIdentificacion : "CC",
    numeroIdentificacion : "1028862090"
}
console.log(estudiante4);

//Crear un arreglo de estudiantes 
const listaEstudiante: (Estudiante) [] = [estudiante1 , estudiante2,  estudiante3, estudiante4];

console.log(listaEstudiante)
// recorrer el arreglo
recorrerEstudiantes(listaEstudiante);
//Operaciones con arreglos
console.log("----------")
console.log("Antes de Insertar")
insertarEstudiante(estudiante4, listaEstudiante)
console.log(listaEstudiante)
console.log("----------------")
console.log("Despues de Insertar")
actualizarEstudiante(1,listaEstudiante,"camila","ramirez")
console.log(listaEstudiante)
console.log("antes de borrar")
console.log(listaEstudiante)
borrarEstudiante(1, listaEstudiante)
console.log("----------")
console.log("despues de borrar")
console.log(listaEstudiante)