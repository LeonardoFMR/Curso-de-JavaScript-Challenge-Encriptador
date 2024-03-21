function cuadroDeIngreso() {
  const contenedor = document.createElement("div"); // Nuevo elemento "div" que servirá como contenedor para el cuadro de entrada de texto y el mensaje de error asociado.
  const textoEnProceso = document.createElement("input"); // Elemento input para el cuadro de entrada de texto.
  textoEnProceso.setAttribute("type", "text");// Se establece el atributo type de tipo texto valga la redundancia. 
  textoEnProceso.setAttribute("placeholder", "Ingrese su texto aquí"); //Se establece atributo de contener un placeholder y se inicia el mismo con información.
  textoEnProceso.classList.add("campo-texto"); // Agrega una clase para el texto la misma que se usa para la caja original.
  const mensajeError = document.createElement("div"); // Nuuevo elemento para el mensaje de error.
  mensajeError.classList.add("mensaje-error"); // Se le adiciona una clase para poder darle estilo.
  mensajeError.textContent = ""; // Se inicia "blanca"
  contenedor.appendChild(textoEnProceso); // Inserta el campo de texto dentro del contenedor div, el campo de entrada de texto se mostrará dentro del contenedor cuando este se agregue al documento.
  contenedor.appendChild(mensajeError); // Esto asegura que el mensaje de error esté también contenido dentro del div representado por contenedor, lo que permite mostrar el mensaje de error junto al campo de entrada de texto.
  textoEnProceso.addEventListener("input", function (event) { // Event listener para validar entrada, usará la fuction para filtrar.
    const entradaValida = validadorDeTexto(event.target.value); // Lla  a la fuction filtro, event.target.value representa el valor actual del campo de texto.  
    mostrarMensajeError(entradaValida, mensajeError); // Invocación de la fuction que contiene un mensaje de alerta.
  });
  return contenedor;

    // event.target.value --> https://developer.mozilla.org/es/docs/Web/API/Event/target
    // .appendChild--> https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
    // document.createElement--> https://developer.mozilla.org/es/docs/Web/API/Document/createElement
}

function mostrarMensajeError(entradaValida, mensajeError) {
  if (!entradaValida) { //Verifica si la entrada es false, lo opuesto a tener una entrada válida significa que la entrada no es válida y se debe mostrar un mensaje de error.
    mensajeError.textContent = 'ⓘ Solo letras minúsculas y sin acentos'; // Establece el contenido de texto del elemento 
  } else { // Si la entrada es válida, es decir, si entradaValida es true, no se necesita mostrar ningún mensaje de error.
    mensajeError.textContent = ''; // Se establece el contenido de texto del elemento mensajeError como una cadena vacía ''.
  }
}

function activacion() {     //Fuction de activavipon para el procesio de entrada de información.
  const textoIngresado = document.querySelector(".campo-texto"); // Busca un elemento del HTML que coincida con la clase que contiene el paréntesis usando selector de atributos.
  const textoEnProceso = cuadroDeIngreso(); //Llama la fuction para que se actualice el valor.
  textoIngresado.parentNode.replaceChild(textoEnProceso, textoIngresado); //Reemplaza el campo de texto original con uno nuevo.
  textoEnProceso.focus();// Pone el foco inmediato en el campo de texto

  // parentNode.replaceChild--> https://developer.mozilla.org/es/docs/Web/API/Node/replaceChild
  // document.querySelector --> https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
}

function botonEncriptar() { //Esta es la fuction ligada al botón azúl para encriptar, encripta el texto y lo muestra en la interfaz.
  const textoIngresado = document.querySelector(".campo-texto").value; //Busvca el valor del campo de texto con la clase CSS "campo-texto" y lo asigna a la variable textoIngresado.
  if (!validadorDeTexto(textoIngresado)) {   // Condición simple que invoca el filtro para aplciarese al textoIngresado
    mostrarMensajeError(false, document.querySelector(".mensaje-error")); // Si el texto no es válido, se muestra un mensaje de error.
    return; // No ejecutar la encriptación, la función se detiene.
  }
  // Si el texto es válido, realizar la encriptación 
  let textoFiltrado = ""; // Se inicializa una variable textoFiltrado que contendrá el texto encriptado.
  for (let i = 0; i < textoIngresado.length; i++) { // Bucle  for simple de repetición para buscar letra por letra
    if (textoIngresado[i] === "e") {  // Recorre cada carácter del texto ingresado y, dependiendo del carácter, lo reemplaza por otro texto encriptado según la regla especificada.
      textoFiltrado += "enter";
    } else if (textoIngresado[i] === "i") {
      textoFiltrado += "imes";
    } else if (textoIngresado[i] === "a") {
      textoFiltrado += "ai";
    } else if (textoIngresado[i] === "o") {
      textoFiltrado += "ober";
    } else if (textoIngresado[i] === "u") {
      textoFiltrado += "ufat";
    } else {
      textoFiltrado += textoIngresado[i];
    }
  }

  mostrarTextoProcesado(textoFiltrado, "Mensaje encriptado."); // Invocación de la fuction mostrarTextoProcesado() para mostrar el texto encriptado en la interfaz de usuario junto con un mensaje indicando que el texto ha sido encriptado.
}

function botonDesencriptar() { //Esta es la fuction ligada al botón gris para desencriptar el texto y lo muestra en la interfaz.
  const textoIngresado = document.querySelector(".campo-texto").value; // Selecciona un elemnto del HMTL por su clase y le asigna su valor a una variable local que emplea el nombre del elemento que representa.

  if (!validadorDeTexto(textoIngresado)) {  // Verificar si el texto contiene letras mayúsculas o números pasándolo por la fuction que sirve para validar el texto y contiene el filtro del sistema.
    mostrarMensajeError(false, document.querySelector(".mensaje-error")); // Sino pasa la validación se llama a la fuction que muestra el mensaje de error. 
    return; // No pasa la validación, no ejecutar la desencriptación, se detine la fuction.
  }

  // Si el texto pasa la validación, entonces ejecutar la desencriptación.
  let textoFiltrado = textoIngresado.replace(/enter/g, "e") //Se reemplazan las cadenas encriptadas por sus respectivas letras originales utilizando el método replace de JavaScript.
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

                                //Opté por usar una lógica que me parece tomé de hacer algo similar en hojas de cálculo. 
  mostrarTextoProcesado(textoFiltrado, "Mensaje desencriptado."); // invovación a la función mostrarTextoProcesado para mostrar el texto desencriptado en la interfaz gráfica.

      // .replace --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
}


// Assign event listeners to the buttons when the page loads.
document.addEventListener("DOMContentLoaded", function colocaciondeEventos() { // Se añade un un EventListener que escucha al document cuando esta  "DOMContentLoaded" (cuando esta totalmente cargada la página).
  const btnEncriptar = document.querySelector(".boton1");  // Selecciona un elemnto del HMTL por su clase y le asigna su valor a una variable local que emplea el nombre del elemento que representa.
  const btnDesencriptar = document.querySelector(".boton2");  // Selecciona un elemnto del HMTL por su clase y le asigna su valor a una variable local que emplea el nombre del elemento que representa.
  const campoTexto = document.querySelector(".campo-texto"); // Selecciona un elemnto del HMTL por su clase y le asigna su valor a una variable local que emplea el nombre del elemnto que representa .
  btnEncriptar.addEventListener("click", botonEncriptar); // Añade un escuchador de eventos, el primer parámentro es el tipo de escucha o de activación en este caso "clock" y el segundo parámetro es la fuction que desencadena al escuchar el evento, al darle click.
  btnDesencriptar.addEventListener("click", botonDesencriptar); // Añade un escuchador de eventos, el primer parámentro es el tipo de escucha o de activación en este caso "clock" y el segundo parámetro es la fuction que desencadena al escuchar el evento, al darle click.
  campoTexto.addEventListener("click", activacion); // Añade un escuchador de eventos, el primer parámentro es el tipo de escucha o de activación en este caso "clock" y el segundo parámetro es la fuction que desencadena al escuchar el evento, al darle click.
  
    // document.addEventListener --> https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
    // DOMContentLoaded --> https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
});

function mostrarTextoProcesado(textoSup, textInf) { //Esta es la fuction que implementa los cambios en los botones según se elijan.
  const campoNingunMensajeEncontrado = document.querySelector(".mensaje"); //Busca un elemento del HTMl por su clase donde se procesará el texto, se pasa a una variable.
  campoNingunMensajeEncontrado.textContent = textoSup; //Actualiza el valor de la constante "setando" el valor con la propiedad .textContent y pasa el valor que irá mas cerca del monito
    //Proceso segundo texto
  const cuadroIngresaElTexto = document.querySelector(".cuadroIngresaElTexto");//Busca un elemento del HTMl por su clase donde se procesará el texto, se pasa a una variable
  cuadroIngresaElTexto.textContent = textInf; //Actualiza el valor y pasa el valor que irá mas abajo respecto del monito.

  // .textContent --> https://developer.mozilla.org/es/docs/Web/API/Node/textContent
}

function validadorDeTexto(value) { //Fuction que filtra el texto y es invocada en otras fuction para su re uso, tomará el value de un elemento.
  const filtro = /[^a-z\s]/.test(value); //Se declara la variable filtro que alojará la información que se interpreta como correcta.
  return !filtro; //Regresa el opuesto del filtro (Para que las siguientes lógicas funcionen con la dinámica es como si se iniciara con el elemento en negativo).
}

