function cacheFunction(cb) {
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento 
    // y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual 
    // se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // Aqui tu codigo
    var obj={}
    //console.log("Objeto: ",obj)
    return function buscaNum(numero){
        if(obj.hasOwnProperty(numero)){
            console.log("si está: ",numero)
            return obj[numero]
        }else{
            console.log(cb*cb)
            return obj[numero]=cb*cb
        }
    }
}
var prueba=cacheFunction(5)
prueba(5)
prueba(5)
// function CadenaInvertida(str) {
//     // Instrucción:
//     // Dada una cadena, escriba una función recursiva para devolver la cadena invertida. 
//     // Ejemplo:
//     // => 'divoc'
//     //cadena inversa('covid')
//     // Aqui tu codigo}
//     var arreglo=[]
//     if(str==""){
//         return arreglo
//     }
//     else{
//         arreglo+=str[str.length-1]+CadenaInvertida(str.substring(0,str.length-1)) 
//     }//le saco un caracter a cada string y lo vuelvo a pasar como argumento hasta tener un sring vacio
//     return arreglo
// }
// console.log(CadenaInvertida("francisco"))
// var st="cadena"
// console.log(st.substring(0,st.length-1))
// console.log(CadenaInvertida("hola"))
// function EnteroMasGrande(array) {
//     Instruction:
//     Dada una matriz, escriba una función recursiva para encontrar el entero más grande 
//     en una matriz. */// Ejemplos:
//     maxOf([1, 4, 5, 3])
//     => 5
//     maxOf([3, 1, 6, 8, 2, 4, 5])
//     => 8
//     Aqui tu codigo
//     var max=0
//     for(var i=0;i<array.length;i++){
//         if(array[i].length===undefined && array[i]>max){//el elemento no es array
//             max=array[i]
//         }else if(array[i].length!==undefined){
//             max=EnteroMasGrande(array[i])
//         }
//     }
//     return max

// }
// console.log("maximo: ",EnteroMasGrande([1, 4, [5,4,90], 10]))
function Permutaciones(str){
    
// Instrucción:
//Dada una cadena, escriba una función recursiva para imprimir una matriz de todas las permutaciones posibles de la cadena. */// Ejemplos:
//permutaciones('abc')
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//permutaciones('aabc')
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", " cbaa"]
//Aqui tu codigo
}