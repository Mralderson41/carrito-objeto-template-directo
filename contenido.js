//const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map((fruta) => fruta); // este no modifica el array, pero cuando ponemos un push aqui no funciona, aqui se devuelve un nuevo array
// console.log(nuevoArray);

//const copiaArray = frutas; // ejecuta lo mismo pero modifica el array, en este caso es por referencia podemos empujar otro elemento, mantiene el mismo array y le agrega otro elemento

// frutas.push("🍉");
// console.log(copiaArray);

// const users = [
//     { name: "John", age: 34 },
//     { name: "Amy", age: 20 },
//     { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name) // este array me devuelve solo los nombres, este es un map que no modifica el array!!!
// console.log(names)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosPorDos = numeros.map((mio) => mio * 2)
// console.log(numerosPorDos)

//filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];

// const userFiltrado = users.filter((user) => user.uid !== 3); // si es distinnto de 3 filtralo o eliminalo

// console.log(userFiltrado);

//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

// const amy = users.find((user) => user.uid === 2);

// console.log(amy);


//Utilizando destructuring

// const { age } = users.find((user) => user.uid === 2);
// console.log(age);

//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

// const existe = users.some((user) => user.uid === 2);

// console.log(existe);


// const padre = document.querySelector("border-primary")
// const hijo = document.querySelector("border-secondary")
// const nieto = document.querySelector("border-danger")

// padre.addEventListener("click", () => {
//     console.log("me diste click")
// })

// hijo.addEventListener("click", () => {
//     console.log("me diste click")
// })

// nieto.addEventListener("click", () => {
//     console.log("me diste click")
// })