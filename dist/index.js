"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const operaciones_1 = require("./operaciones");
//Definir objetos(literal) estudiante
const estudiante1 = {
    nombre: "cristian",
    apellido: "buitrago",
    edad: "20",
    tipoIdentificacion: "CC",
    numeroIdentificacion: "1234567890"
};
console.log(estudiante1);
const estudiante2 = {
    nombre: "Lorena",
    apellido: "Rojas",
    tipoIdentificacion: "CC",
    numeroIdentificacion: "10174917"
};
console.log(estudiante2);
const estudiante3 = {
    nombre: "Felipe",
    apellido: "Higuera",
    edad: "17",
    tipoIdentificacion: "TI",
    numeroIdentificacion: "51857913"
};
console.log(estudiante3);
const estudiante4 = {
    nombre: "Sara",
    apellido: "Nuñez",
    edad: "18",
    tipoIdentificacion: "CC",
    numeroIdentificacion: "1028862090"
};
console.log(estudiante4);
//Crear un arreglo de estudiantes 
const listaEstudiante = [estudiante1, estudiante2, estudiante3, estudiante4];
console.log(listaEstudiante);
// recorrer el arreglo
(0, recorrerEstudiantes_1.default)(listaEstudiante);
//Operaciones con arreglos
console.log("----------");
console.log("Antes de Insertar");
(0, operaciones_1.insertarEstudiante)(estudiante4, listaEstudiante);
console.log(listaEstudiante);
console.log("----------------");
console.log("Despues de Insertar");
(0, operaciones_1.actualizarEstudiante)(1, listaEstudiante, "camila", "ramirez");
console.log(listaEstudiante);
console.log("antes de borrar");
console.log(listaEstudiante);
(0, operaciones_1.borrarEstudiante)(1, listaEstudiante);
console.log("----------");
console.log("despues de borrar");
console.log(listaEstudiante);
