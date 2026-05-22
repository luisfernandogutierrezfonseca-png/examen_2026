import Controller from "../controller/controller.js";
import prompt from "prompt-sync";

const input = prompt();
const controller = new Controller();

export default class Menu {
    constructor(opcion = 0) {
        this.opcion = opcion;
    }

    getMenu() {
        do {

            console.clear();

            console.log("1. mostrar empleado");
            console.log("2. mostrar desarrollador");
            console.log("3. mostrar gerente");
            console.log("4. salir");

            this.leerOpcion();
            this.validarOpcion(this.opcion);
            input("Presione enter para continuar...");

        } while (this.opcion != 4);
    }
    

    validarOpcion(opcion = 0) {
        if (opcion == 1) controller.getEmpleado();
        if (opcion == 2) controller.getDesarrollador();
        if (opcion == 3) controller.getGerente();
    }

    leerOpcion() {
        this.opcion = parseInt(input("Ingrese una opcion: "));
    }
}

