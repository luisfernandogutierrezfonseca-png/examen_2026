import Empleado from "../class/empleado.js";
import Desarrollador from "../class/desarrollador.js";
import Gerente from "../class/gerente.js";

export default class Controller {
    constructor() {}

    getEmpleado() {
        const empleado = new Empleado("Carlos Lopez", "040806", 60000);
        empleado.mostrarDetalles();
    }

    getDesarrollador() {
        const desarrollador = new Desarrollador("Ana Martinez", "020906", 70000, "JavaScript");
        desarrollador.mostrarDetalles();
    }

    getGerente() {
        const gerente = new Gerente("Luis García", "150573", 90000, "ventas");
        gerente.mostrarDetalles();
    }
}