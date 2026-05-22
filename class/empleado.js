export default class Empleado {
  #salarioBase;
  constructor(nombre, cedula, salarioBase) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.salarioBase = salarioBase;
  }

  // Metodos para modificar el campo privado salarioBase
  setSalario(salario) {
    if (salario <= 0) {
      console.error("El salario debe ser mayor a cero");
    } else {
      this.salarioBase = salario;
    }
  }

  getSalario() {
    return this.salarioBase;
  }

  calcularSalarioNeto() {
    return this.salarioBase;
  }
  mostrarDetalles() {
    console.log(
      `Empleado: ${this.nombre}, 
      Cédula: ${this.cedula}, 
      Salario Neto: C$${this.calcularSalarioNeto()}`,
    );
  }
}
