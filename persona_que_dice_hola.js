class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Holaaaa ")
  }
}


new Persona("pepe", 25).saludar()
