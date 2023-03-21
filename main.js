function gestionarMenu() {
    let opcion = -1;
    const array = [];

    while (opcion !== 0) {
        opcion = parseInt(prompt(`
        --MENU--
        1. Lectura de datos
        2. Crear Objeto
        3. Mostrar Objeto
        4. Crear Array
        5. Mostrar Array
        6. Elimine primer elemento del Array
        7. Elimine ultimo elemento del Array
        8. Eliminar cualquier elemento del array
        9. Agregar elemento al comienzo del array
        10. Agregar elemento al final del array
        11. Crear array con objetos
        12. Iterar array con objetos con FOR
        13. Iterar array con objetos con ForEach
        14. Iterar array con objetos con Map y crear copia
        15. Proceso personal
        0. Salir`
        ));

        switch (opcion) {
        case 1:
            const dato = prompt("Ingrese un dato:");
            console.log(`El dato ingresado es: ${dato}`);
            break;
        case 2:
            const objeto = {};
            objeto.push(dato);
            console.log(`El objeto creado es:`, objeto);
            break;
        case 3:
            console.log(`El objeto es:`, objeto);
            break;
        case 4:
            const cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos del array:"));
            for (let i = 0; i < cantidadElementos; i++) {
            const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
            array.push(elemento);
            }
            console.log(`El array creado es:`, array);
            break;
        case 5:
            console.log(`El array es:`, array);
            break;
        case 6:
            array.shift();
            console.log(`El primer elemento del array fue eliminado. El array actual es:`, array);
            break;
        case 7:
            array.pop();
            console.log(`El último elemento del array fue eliminado. El array actual es:`, array);
            break;
        case 8:
            const indice = parseInt(prompt("Ingrese el índice del elemento a eliminar:"));
            array.splice(indice, 1);
            console.log(`El elemento en el índice ${indice} fue eliminado. El array actual es:`, array);
            break;
        case 9:
            const elementoAlComienzo = prompt("Ingrese el elemento a agregar al comienzo del array:");
            array.unshift(elementoAlComienzo);
            console.log(`El elemento ${elementoAlComienzo} fue agregado al comienzo del array. El array actual es:`, array);
            break;
        case 10:
            const elementoAlFinal = prompt("Ingrese el elemento a agregar al final del array:");
            array.push(elementoAlFinal);
            console.log(`El elemento ${elementoAlFinal} fue agregado al final del array. El array actual es:`, array);
            break;
        case 11:
            const arrayConObjetos = [
                { nombre: "objeto1", valor: 1 },
                { nombre: "objeto2", valor: 2 },
                { nombre: "objeto3", valor: 3 }
            ];
            console.log(`El array con objetos es:`, arrayConObjetos);
            break;
        case 12:
            for (let i = 0; i < arrayConObjetos.length; i++) {
                console.log(`El objeto en la posición ${i} es:`, arrayConObjetos[i]);
            }
            break;
        case 13:
            arrayConObjetos.forEach(objeto => {
                console.log(`El objeto es:`, objeto);
            });
            break;
        case 14:
            const arrayCopia = arrayConObjetos.map(objeto => ({ ...objeto }));
            console.log(`La copia del array con objetos es:`, arrayCopia);
            break;
        case 15:
            const miProcesoPersonal = prompt("Ingrese el proceso personal a realizar:");
            console.log(`El proceso personal realizado es: ${miProcesoPersonal}`);
            break;
        case 0:
            console.log("Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Por favor, intente de nuevo.");
            break;
        }
    }
}
gestionarMenu();
