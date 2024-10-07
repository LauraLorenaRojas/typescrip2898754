import { Estudiante } from './Estudiante';
export const insertarEstudiante = function (estudiante:Estudiante, arregloEstudiantes:Estudiante []){
    //instrucciones para 
    //agregar (create) el estudiante
    //al arreglo de estudiantes
    //metodo Array en js permite insertar 
    //un elemento al arreglo?
    arregloEstudiantes.push(estudiante);
 }
export const actualizarEstudiante = function( indice : number, listaEstudiante: Estudiante[], nombre: string, apellido: string){
    //instrucciones para actualzar 
    // el estudiante que se encuentre
    // en el indice indicado en el 
    // parametro
 }

export const borrarEstudiante = function (indice:number,listaEstudiante: Estudiante[]){
    // instrucions para elimnar elemento 
    // del arreglo que esta en el indice del parametro 
    listaEstudiante.splice(indice,1); 
 }
