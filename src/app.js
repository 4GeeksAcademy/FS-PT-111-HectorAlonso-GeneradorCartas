
//window.onload = function() {
/*una vez lo tenia "terminado", he querido probar a poner un boton que genere una nueva carta,
  para esto dejo el window.onload en comentado*/

//cremaos el queryselector para el boton, con la funcion de click 
document.querySelector(".boton").addEventListener("click", () => {  
//creamos los arays y las variables para los aleatorios
    let numeroCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let tipoCarta = ["♦", "♥", "♠", "♣"];
      let numeroAleatorio = Math.floor(Math.random()*numeroCarta.length);
      let tipoAleatorio = Math.floor(Math.random()*tipoCarta.length);

//seleccionamos el numero con el query.selector y hacemos que cambie
      let numeros = document.querySelector(".numero-carta");
        numeros.textContent = numeroCarta[numeroAleatorio];

/*en el caso del tipo de carta usamos queryselectorAll, 
  lo recorremos con un bucle para que lo asigne a todo el contenido del array
  una vez generado el aleatorio, dentro del buclue asigna el tipo con el textContent al igual que el numero
  y el estilo en linea con un operador ternario*/
      let tipos = document.querySelectorAll(".tipo-carta");
        tipos.forEach(tipo => {
            tipo.textContent = tipoCarta[tipoAleatorio];  
            tipo.style.color = (tipo.textContent== "♦" || tipo.textContent== "♥")? "red" : "black";
         }) 
    })
 // }
 //esta es la llave de cierre del window.onload, no lo he quitado, solo lo dejo comentado