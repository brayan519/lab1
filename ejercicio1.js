const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function obtenerNumerosParesElevadoAlCuadradoMayoresQue10(){
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0 && numeros[i] > 0) {
            let numeroElevadoAlCuadrado = numeros[i];
            let brayan=numeroElevadoAlCuadrado * numeroElevadoAlCuadrado;
            if (brayan > 10) {
                resultado.push(brayan);
            }
        }
    }
    return resultado;
}
const resultados = obtenerNumerosParesElevadoAlCuadradoMayoresQue10(numeros);
console.log(resultados);