const texto = 'Hola, mundo!';
function obtenerFrecuenciaLetras(){
    const contador = {};
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (contador[caracter]) {
            contador[caracter]++;
        }
        else {
            contador[caracter] = 1;
        }
    }
    return contador;
}
const resultado3 = obtenerFrecuenciaLetras(texto);
console.log(resultado3);