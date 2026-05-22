import prompt from "prompt-sync";
const input = prompt();

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

        } while (this.opcion != 4);
    }

    leerOpcion() {
        this.opcion = parseInt(input("Ingrese una opcion: "));
    }
}

