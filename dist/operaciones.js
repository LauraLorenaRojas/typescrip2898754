"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    //instrucciones para 
    //agregar (create) el estudiante
    //al arreglo de estudiantes
    //metodo Array en js permite insertar 
    //un elemento al arreglo?
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, listaEstudiante, nombre, apellido) {
    //instrucciones para actualzar 
    // el estudiante que se encuentre
    // en el indice indicado en el 
    // parametro
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, listaEstudiante) {
    // instrucions para elimnar elemento 
    // del arreglo que esta en el indice del parametro 
    listaEstudiante.splice(indice, 1);
};
exports.borrarEstudiante = borrarEstudiante;
