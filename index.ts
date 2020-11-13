// Creada interfaz "UserData" en el archivo "user-data.ts".

// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.

import {UserData} from './user-data';

let user: UserData;

// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.

function getData<T>(param: T): void{
  console.log(param);
}

// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".

user = {
  name:"Pepe", 
  age: 55, 
  phone: 25323526
};

getData(user.name);
getData(user.phone);

// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.

function getData2<T>(param: T): void{
  typeof param === 'string'? console.log("El usuario se llama " + param): console.log("El numero de telefono del usuario es " + param);
}

getData2(user.name);
getData2(user.phone);

//-->Me perdí esa parte de la explicación porque me tuve que ausentar por lo que no estoy segura de que opción es más correcta si la de arriba o la de abajo, por lo que le pongo las dos

function isNumber<T>(x: T): boolean {
  return typeof x === "number";
}

function getData3<T>(param: T): void{
  if(isNumber(param)) console.log("El numero de telefono del usuario es " + param);
  else  console.log("El usuario se llama " + param);
}

getData3(user.name);
getData3(user.phone);


// Ánimo que ya lo tenéis!
