// Importando el archivo empleado.js
// para poder usar la clase Empleado
import Empleado from "./class/empleado.js";
// Instancia de la clse empleado
const empleado = new Empleado("Juan Perez", "1234567890", 50000);
// Imprimiendo el objeto empleado1
console.log(empleado);

empleado.setSalario(100);
console.log("el nuevo salario es: " + empleado.getSalario());
