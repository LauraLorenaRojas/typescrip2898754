import { Estudiante } from "./Estudiante";

function recorrerEstudiantes (arregloEstudiante : Estudiante[]) {
arregloEstudiante.forEach(function(elemento){
    console.log(elemento);
    console.log("----------")
});
}
export default recorrerEstudiantes;
