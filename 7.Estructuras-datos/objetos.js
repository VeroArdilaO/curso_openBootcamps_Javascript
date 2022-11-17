//Trabajando con objetos

const datos ={
    nombre: "Veronica",
    apellido: "Ardila",
    edad : 27,
    estatura:154,
    isDeveloper: true
}
const prop = "edad";
console.log(datos[prop]);

const lista = [
    {...datos },
   {
        nombre: "Victoria",
        apellido: "Londres",
        edad: 30,
        estatura:170,
        isDeveloper: false
    },
    {
        nombre: "Valentina",
        apellido: "Madrid",
        edad : 12,
        estatura:145,
        isDeveloper: false
    }
]

lista.sort((a,b) => b.edad - a.edad);

console.log(lista)


