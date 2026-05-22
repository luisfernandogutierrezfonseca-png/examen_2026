import Empleado from "./empleado.js";
export default class Desarrollador extends Empleado {
  constructor(nombre, cedula, salarioBase, lenguajeProgramacion) {
    super(nombre, cedula, salarioBase);
    this.lenguajeProgramacion = lenguajeProgramacion;
  }

  calcularSalarioNeto() {
    return this.getSalario() + 1500;
  }

  mostrarDetalles() {
    console.log(
      `Desarrollador: ${this.lenguajeProgramacion}`,
      `Empleado: ${this.nombre}, 
      Cédula: ${this.cedula}, 
      Salario Neto: C$ ${this.calcularSalarioNeto()}`,
    );
  }
}
