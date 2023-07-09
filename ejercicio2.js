const personas = [
    {nombre: 'Juan', edad: 30},
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 27 },
    { nombre: 'María', edad: 22 },
];
function obtenerPersonaMasJoven() {
    let masJoven = personas[0];
    for (let i = 1; i < personas.length; i++) {
        if (personas[i].edad < masJoven.edad) {
            masJoven = personas[i];
        }
    }
    return masJoven;
}
const resultado = obtenerPersonaMasJoven(personas);
console.log(resultado);