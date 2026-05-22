import Empleado from "./empleado.js";
export default class Gerente extends Empleado {
  constructor(nombre, cedula, salarioBase, departamento) {
    super(nombre, cedula, salarioBase);
    this.departamento = departamento;
  }

  calcularSalarioNeto() {
    return this.getSalario() + this.getSalario() * 0.2;
  }

  mostrarDetalles() {
    console.log(
      `Gerente: ${this.departamento},
      Empleado: ${this.nombre}, 
      Cédula: ${this.cedula}, 
      Salario Neto: C$ ${this.calcularSalarioNeto()}`,
    );
  }
}
