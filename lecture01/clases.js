// class Persona{
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;        
//     }
//     imprimirQuienEs(){
//         console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
//     }
// }

// const laura = new Persona('Laura','X');
// laura.imprimirQuienEs();

// class Animal {
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }
//     empiezaAcorrer(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} corre con una velocidad de ${this.velocidad} km/h`;       
//     }
//     dejoDeCorrer(){
//         this.velocidad = 0;
//         return `${this.nombre} se detuvo y ahora está sentado.`;       
//     }

// }

// // let animal = new Animal('Animal');
// // console.log(animal.empiezaAcorrer(30));
// // console.log(animal.dejoDeCorrer());

// class Perro extends Animal {
//     ladra(){
//         return `${this.nombre} está ladrando!.`
//     }
// }

// let chubaca = new Perro('Chuewi')
// console.log(chubaca.empiezaAcorrer(5));
// console.log(chubaca.dejoDeCorrer());

// class Persona{
//     constructor(nombre,apellido,materno){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.materno = materno;
//     }

//     get nombreCompleto(){
//         return `${this.nombre} ${this.apellido} ${this.materno}`;
//     }
//     set nombreCompleto(nombre){
//         const partes = nombre.split(' ');
//         this.nombre = partes[0];
//         this.apellido = partes[1];
//         this.materno = partes[2];
//     }
// }

// const laura = new Persona('Laura','Cuevas','González');
// console.log(laura.nombreCompleto)

// laura.nombreCompleto = 'Laura X Undefined';
// console.log(laura.nombreCompleto)


const objeto = {
    nombre: 'Carlitos',
    get nombreObjeto(){
        return this.nombre;
    }
    
}