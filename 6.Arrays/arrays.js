let listaCompra = ["huevos", "pan", "arroz","papa","arepas"];

//Metodo push para agregar un elemento al final
listaCompra.push("Aceite de Girasol");

//Metodo pop para eliminar un elemento al final
listaCompra.pop("Aceite de Girasol");

console.log(listaCompra);

let listaPeliculas = [{
    titulo:"el libro de la selva", 
    director:"Jon Favreau", 
    fecha: 2016,
},
{
    titulo:"Encanto", 
    director:"Byron Howard", 
    fecha: 2021,
},
{
    titulo:"Toy Story", 
    director:"John Lasseter", 
    fecha: 1995,
}];
// Metodo filter, regresa un boolean a partir de una condicion, filtra la informacion especifica que requiero
const filtroFecha = listaPeliculas.filter(obj => obj.fecha > 2010);
console.log("FILTRO FECHA" + JSON.stringify(filtroFecha));

//metodo Map para crear una lista nueva a partir de otra
const directores = listaPeliculas.map(valor => valor.director);
console.log(directores);
const titulos = listaPeliculas.map(valor => valor.titulo );
console.log(titulos);

//Metodo concatenar para juntar elementos de dos listas
let concatenar = directores.concat(titulos);
console.log(concatenar);

// Spread operator o factor de propagacion, genera una copia del array que se esta llamando en este caso directores y titulos
console.log(...directores.concat(...titulos))
