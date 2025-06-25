// punto 2: coche con marca, modelo y año + metodo para determinar antiguedad desde su fabricacion

class Coche {
    constructor(marca,modelo,anioF) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioF = anioF;
    }

    antiguedad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anioF;
    }   
    
}

// punto 3: clase producto con nombre, precio y stock + metodos para aumentar o disminuir stock

class Producto {
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    aumentarStock(aumento){
        this.stock += aumento;
        console.log(`El stock de ${this.nombre} sumó ${aumento}. El stock disponible ahora es de ${this.stock}`)
    }

    restarStock(quita){
        this.stock -= quita;
        console.log(`El stock de ${this.nombre} dismiuyó ${quita}. El stock disponible ahora es de ${this.stock}`)
    }
}

// punto 4: rectangulo

class Rectangulo {
    constructor(largo,ancho){
        this.largo = largo;
        this.ancho = ancho;
    }

calcAreaR(areaR){
    areaR = this.largo * this.ancho;
    return areaR;
}
calcPerimetroR(perimetroR){
    perimetroR = this.largo*2 + this.ancho*2
    return perimetroR;
}
}

// 5: circulo

class Circulo {
    constructor(radio){
        this.radio = radio;
        this.diametro = radio*2;
    }

    calcAreaC(areaC){
        areaC = Math.PI * this.radio**2;
        return areaC;
    }
    calcCircun(circunferencia){
        circunferencia = Math.PI * this.diametro;
        return circunferencia;
    }
}

// 6: clase estudiante - nombre, edad y carrera - metodos get y set + calculo promedio de examenes

class Estudiante {
    constructor(nombre, edad, carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    set setEdad(newEdad){
        this.edad = newEdad;
    }
    set setNombre(newNombre){
        this.nombre = newNombre;
    }
    set setCarrera(newCarrera){
        this.carrera = newCarrera;
    }

    get getEdad(){
        return this.edad;
    }
    get getNombre(){
        return this.nombre;
    }
    get getCarrera(){
        return this.carrera;
    }
    promExamenes(nota1,nota2,nota3,nota4){
        promedio = (nota1+nota2+nota3+nota4)/4;
        return promedio;
    }

}

// 7: banco y tasa de interés

class Banco {
    constructor(nombre, tasaInt){
        this.nombre = nombre;
        this.tasaInt = tasaInt;
    }

    calculoInt(plata,anios){
        // calculo de interes simple
        return plata * this.tasaInt * anios;
    }

    tiempoParaDuplicar(){
        return 1 / this.tasaInt;
    }
}

// 8: tienda 

class Tienda {
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }

    agregarProducto(newProducto){
        this.productos.push(newProducto);
        console.log(`Se ha agregado el producto "${newProducto}" a la lista de productos`)
    }
   
    eliminarProducto(posicion) {
    if (posicion >= 0 && posicion < this.productos.length) {
        const prodEliminado = this.productos.splice(posicion, 1);
        console.log(`Producto en el índice ${posicion} eliminada:`, prodEliminado[0]);
        return true;
    } else {
        console.log(`Posición inválida: ${posicion}`);
        return false;
    }
    }
}

// punto 9: empleado

class Empleado {
    constructor(nombre,edad,salario,cargo){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
        this.cargo = cargo
    }

    get getNombre(){
        return this.nombre;
    }
    get getEdad(){
        return this.edad;
    }
    get getSalario(){
        return this.salario;
    }
    get getCargo(){
        return this.cargo
    }

    set setNombre(newNombre){
        this.nombre = newNombre;
    }
    set setEdad(newEdad){
        this.edad = newEdad;
    }
    set setSalario(newSalario){
        this.salario = newSalario;
    }
    set setCargo(newCargo){
        this.cargo = newCargo;
    }

    salarioAnual(salarioAnual){
        salarioAnual = this.salario * 12;
        console.log(`El salario anual de ${this.nombre} es de ${salarioAnual}`) 
    }
}

// punto 10: libro con metodos get y set + saber si es de ficcion

class Libro{
    constructor(titulo,autor,genero,numPag){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.numPag = numPag;
    }

    set setTitulo(newTitulo){
        this.titulo = newTitulo;
    }
    set setAutor(newAutor){
        this.autor = newAutor;
    }
    set setGenero(newGenero){
        this.genero = newGenero;
    }
    set setNumPag(newNumPag){
        this.numPag = newNumPag;
    }

    get getTitulo(){
        return this.titulo;
    }
    get getAutor(){
        return this.autor;
    }
    get getGenero(){
        return this.genero;
    }
    get getNumPag(){
        return this.numPag;
    }

    condicionFiccion(genero){
        if (this.genero == "Ficción" || this.genero == "ficcion" || this.genero == "ficción" || this.genero == "Ficcion") {
            console.log(`El libro "${this.titulo}" es de ficción.`) 
        }
        else {
            console.log(`El libro "${this.titulo}" no es de ficción.`)
            }
        }
    }