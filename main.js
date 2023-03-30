function mostrarMenu() {
    let opcion;
    let objeto = {};
    let array = [];
    let arrayObjetos = [];
    const crearObjeto = () => {
        let objetov = {};
        let propiedad, valor;

        propiedad = prompt("Ingresa el nombre de la propiedad del objeto: ");
        valor = prompt(`Ingresa el valor para la propiedad "${propiedad}" :`);
        Object.assign(objetov, { [propiedad]: valor })
        return objetov;
        // let nombre = prompt("Ingresa el nombre del objeto:");
        // let descripcion = prompt("Ingresa la descripción del objeto:");
        // objeto = { nombre: nombre, descripcion: descripcion };
        // alert("Objeto creado correctamente!");
    }

    const crearArray = () => {
        let cantidad = prompt("Ingresa la cantidad de elementos que tendrá el array:");
        for (let i = 0; i < cantidad; i++) {
            let elemento = prompt("Ingresa el elemento " + (i + 1) + " del array:");
            array.push(elemento);
        }
    }

    const crearArrayObjetos = () => {
        var cantidad = parseInt(prompt("Ingresa la cantidad de objetos que tendrá el array:"));
        for (let i = 0; i < cantidad; i++) {
            let objetov = {};
            let propiedad, valor;

            propiedad = prompt("Ingresa el nombre de la propiedad del objeto " + (i + 1) + ":");
            valor = prompt(`Ingresa el valor para la propiedad ${propiedad} del objeto` + (i + 1) + `:`);
            Object.assign(objetov, { [propiedad]: valor })

            arrayObjetos.push(objetov)
        }
        alert("Has creado el array con objetos: " + JSON.stringify(arrayObjetos));
    }

    const borrarDatos = () => {
        objeto = {};
        array = [];
        arrayObjetos = [];
    }

    do {
        opcion = prompt(`

        MENU
    1. Lectura de datos
    2. Crear Objeto
    3. Mostrar Objeto
    4. Crear Array
    5. Mostrar Array
    6. Eliminar primer elemento del Array
    7. Eliminar último elemento del Array
    8. Eliminar cualquier elemento del array
    9. Agregar elemento al comienzo del array
    10. Agregar elemento al final del array
    11. Crear array con objetos
    12. Iterar array con objetos con FOR
    13. Iterar array con objetos con ForEach
    14. Iterar array con objetos con Map y crear copia
    15. Borrar todos los datos ingresados
    0. Salir`);

        switch (opcion) {
            case "1":
                // Lectura de datos
                let dato = prompt("Ingresa un dato:");
                alert("Has ingresado el dato: " + dato);
                break;
            case "2":
                // Crear Objeto
                objeto = crearObjeto();
                break;
            case "3":
                // Mostrar Objeto
                if (Object.keys(objeto).length === 0) {
                    if (confirm("El objeto no ha sido creado, ¿desea crearlo?")) {
                        objeto = crearObjeto();
                        alert("El objeto creado es: " + JSON.stringify(objeto));
                    } else {
                        break;
                    }
                } else {
                    alert("El objeto es: " + JSON.stringify(objeto));
                }
                break;
            case "4":
                // Crear Array
                crearArray();
                break;
            case "5":
                // Mostrar Array
                if (array.length !== 0) {
                    alert("El array es: " + JSON.stringify(array));
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                    } else {
                        break;
                    }
                }
                break;
            case "6":
                // Eliminar primer elemento del Array
                if (array.length !== 0) {
                    array.shift();
                    alert("Se ha eliminado el primer elemento del array. Ahora el array es: " + JSON.stringify(array));
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                        array.shift();
                        alert("Se ha eliminado el primer elemento del array. Ahora el array es: " + JSON.stringify(array));
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "7":
                // Eliminar último elemento del Array
                if (array.length !== 0) {
                    array.pop();
                    alert("Se ha eliminado el último elemento del array. Ahora el array es: " + JSON.stringify(array));
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                        array.pop();
                        alert("Se ha eliminado el último elemento del array. Ahora el array es: " + JSON.stringify(array));
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "8":
                // Eliminar cualquier elemento del array
                if (array.length !== 0) {
                    let indice = prompt("Ingresa el índice del elemento que deseas eliminar:");
                    if (indice >= 0 && indice < array.length) {
                        array.splice(indice, 1);
                        alert("Se ha eliminado el elemento " + indice + " del array. Ahora el array es: " + JSON.stringify(array));
                    } else {
                        alert("El índice ingresado es inválido.");
                    }
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                        let indice = prompt("Ingresa el índice del elemento que deseas eliminar:");
                        if (indice >= 0 && indice < array.length) {
                            array.splice(indice, 1);
                            alert("Se ha eliminado el elemento " + indice + " del array. Ahora el array es: " + JSON.stringify(array));
                        } else {
                            alert("El índice ingresado es inválido.");
                        } break;
                    } else {
                        break;
                    }
                }
                break;
            case "9":
                // Agregar elemento al comienzo del array
                if (array.length !== 0) {
                    var elemento = prompt("Ingresa el elemento que deseas agregar al comienzo del array:");
                    array.unshift(elemento);
                    alert("Se ha agregado el elemento al comienzo del array. Ahora el array es: " + JSON.stringify(array));
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                        var elemento = prompt("Ingresa el elemento que deseas agregar al comienzo del array:");
                        array.unshift(elemento);
                        alert("Se ha agregado el elemento al comienzo del array. Ahora el array es: " + JSON.stringify(array));
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "10":
                // Agregar elemento al final del array
                if (array.length !== 0) {
                    var elemento = prompt("Ingresa el elemento que deseas agregar al final del array:");
                    array.push(elemento);
                    alert("Se ha agregado el elemento al final del array. Ahora el array es: " + JSON.stringify(array));
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArray();
                        alert("El array creado es: " + JSON.stringify(array));
                        var elemento = prompt("Ingresa el elemento que deseas agregar al final del array:");
                        array.push(elemento);
                        alert("Se ha agregado el elemento al final del array. Ahora el array es: " + JSON.stringify(array));
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "11":
                // Crear array con objetos
                crearArrayObjetos();
                break;
            case "12":
                // Iterar array con objetos con FOR
                if (arrayObjetos.length !== 0) {
                    for (let i = 0; i < arrayObjetos.length; i++) {
                        alert("El objeto " + (i + 1) + " es: " + JSON.stringify(arrayObjetos[i]));
                    }
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArrayObjetos();
                        alert("El array creado es: " + JSON.stringify(arrayObjetos));
                        for (let i = 0; i < arrayObjetos.length; i++) {
                            alert("El objeto " + (i + 1) + " es: " + JSON.stringify(arrayObjetos[i]));
                        }
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "13":
                // Iterar array con objetos con ForEach
                if (arrayObjetos.length !== 0) {
                    arrayObjetos.forEach(function (objeto, indice) {
                        alert("El objeto " + (indice + 1) + " es: " + JSON.stringify(objeto));
                    }); break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArrayObjetos();
                        alert("El array creado es: " + JSON.stringify(arrayObjetos));
                        arrayObjetos.forEach(function (objeto, indice) {
                            alert("El objeto " + (indice + 1) + " es: " + JSON.stringify(objeto));
                        }); break;
                    } else {
                        break;
                    }
                }
                break;
            case "14":
                // Iterar array con objetos con Map y crear copia
                if (arrayObjetos.length !== 0) {
                    let copia = arrayObjetos.map(function (objeto) {
                        return Object.assign({}, objeto);
                    });
                    alert("El array original es: " + JSON.stringify(arrayObjetos) + " y la copia es: " + JSON.stringify(copia));
                    break;
                } else {
                    if (confirm("El array no ha sido creado, ¿desea crearlo?")) {
                        crearArrayObjetos();
                        alert("El array creado es: " + JSON.stringify(arrayObjetos));
                        let copia = arrayObjetos.map(function (objeto) {
                            return Object.assign({}, objeto);
                        });
                        alert("El array original es: " + JSON.stringify(arrayObjetos) + " y la copia es: " + JSON.stringify(copia));
                        break;
                    } else {
                        break;
                    }
                }
                break;
            case "15":
                // Proceso personal
                borrarDatos();
                alert("Datos borrados ");
                break;
            case "0":
                // Salir
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción inválida. Por favor selecciona una opción del menú.");
        }
    } while (opcion !== "0");

    while (confirm("¿Desea volver a iniciar el programa?")) {
        mostrarMenu();
    }
}
mostrarMenu();
