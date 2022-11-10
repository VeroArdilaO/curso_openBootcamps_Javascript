let nombre = "Veronica ";
let apellido = "Ardila Osorio"
let estudiante = nombre.concat(" ",apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroLetras = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length-1);
let eliminarEspacios = estudiante.trim().length;
let incluido = estudiante.includes(nombre);

console.log(incluido);