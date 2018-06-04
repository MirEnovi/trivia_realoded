//alert("hola"); para asegurar vinvulo entre html y js

//se declaran variables necesarias
//la mayoria de los id a rellenar se guardan en variables
var welcome = document.getElementById("bienvenido"),
name = document.getElementById ("nombre").value,
askForName = document.getElementById ("pedir-nombre"),
play = document.getElementById ("juegas"),
qPrompt = document.getElementById ("pregunta-Prompt"),
qJs = document.getElementById ("pregunta-js"),
qHtml = document.getElementById ("pregunta-html"),
answers = document.getElementById("contenedorRespuestas"),
//variables que se usaran para imprimir resultados
correctOne = " ", correctTwo = " ", 
correctThree = " ", incorrectOne = " ", 
incorrectTwo = " ", incorrectThree = " ";

/*funcion conectada al boton obtener nombre, 
mostrara el nombre de usuario en la pagina
y oculta la pregunta del nombre y muesta la de si quiere jugar*/
function obtenerNombre () {
    welcome.innerHTML = name;
    askForName.style.display = "none";
    play.style.display = "block";
}

function siJuego() {
    play.style.display = "none";
    qPrompt.style.display = "block";
}

/*Cada funcion siguiente esta ligada al boton de la pregunta correspondiente
-guarda el resultado en una variable que compara y dependiendo si es 
correcto o incorrecto guardara infomacion para mostrar en una nueva variable*/
function preguntaPromnt() {
    
    var answerOne = parseInt(document.getElementById("respuesta1").value);
    if (answerOne == 3){
        correctOne = "<br/>Tu respuesta a la 1er pregunta fue la " + answerOne + "<br/><br/>";
    } else {
        incorrectOne = "<br/>Tu respuesta a la 1er pregunta fue la " + answerOne + "<br/><br/>";
    }
    qPrompt.style.display = "none";
    qJs.style.display = "block";
}

function preguntaJs() {
   // event.preventDefault(e); se quito para mejor usar botones
    var answerTwo = parseInt(document.getElementById ("respuesta2").value);
    if (answerTwo == 2) {
        correctTwo = "<br/>Tu respuesta a la 2da pregunta fue la " + answerTwo + "<br/><br/>";
    } else {
        incorrectTwo = "<br/>Tu respuesta a la 2da pregunta fue la " + answerTwo + "<br/><br/>";
    }
    qJs.style.display = "none";
    qHtml.style.display = "block";
}

function preguntaHtml() {
    //event.preventDefault(e); se quito para mejor usar botones
    var answerThree = parseInt (document.getElementById ("respuesta3").value);
    if (answerThree == 1) {
        correctThree = "<br/>Tu respuesta a la 3er pregunta fue la " + answerThree + ". <br/><br/>";
    } else {
        incorrectThree = "<br/>Tu respuesta a la 3er pregunta fue la " + answerThree + ". <br/><br/>";
    }
    /*dentro de la misma funcion, damos la instruccon de mostrar en ids
    diferentes las variables de respuestas correctas o incorrectas */
    qHtml.style.display = "none";
    answers.style.display = "block";
    answersCorrects = document.getElementById("correctas");
    answersIncorrects = document.getElementById("incorrectas");
    answersCorrects.innerHTML = correctOne + correctTwo + correctThree;
    answersIncorrects.innerHTML = incorrectOne + incorrectTwo + incorrectThree;
}

//el juego se despide si no te interesa jugar
function noJuego() {
    welcome.innerHTML = name + ". Hasta Pronto...";
}






/*
var uName = prompt("Ingresa tu nombre").toUpperCase();
//Se declara variable uName para guardar el nombre del usuario

//Se valida que el usuario ingrese una palabra//
while (uName == false || uName === " ") {
    alert("no has escrito un nombre, intentalo de nuevo");
    uName = prompt("Ingresa tu nombre").toUpperCase();
} 

//se declara userName para remplasar el contenido del id 'nombre' 
//y se remplaza el contenido del Id 'nombre'por lo ingresado por el usuario
var userName = document.getElementById ("nombre");
userName.innerHTML = uName; 

//Se declara variable ansewrConatainer para modificar id contenedor de respuestas
var answerContainer = document.getElementById ("contenedorRespuestas"),
//con la variable play se preguta al usuario si quiere jugar
play = confirm ("¿Quieres jugar?"); 

if (play) {
     alert("Responde con el numero de la respuesta correcta");
     //Creamos variables para las preguntas y respuetas
    var answerOne, answerTwo, answerThree,
    qPrompt = "¿QUÉ ES UN PROMPT?\n1.UN JUEGO\n2.UN ELEMENTO DE JAVA\n3.ELEMENTO DE JAVASCRIPT",
    qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n1.AMBAS SON IGUALES\n2.NO SON IGUALES",
    qHtml = "¿QUÉ ES EL HTML?\n1.UN INTERPRETE\n2.UN LENGUAJE DE PROGRAMACIÓN\n3.LAS 2 ANTERIORES",
    corrects = document.getElementById("correctas"),
    incorrects = document.getElementById("incorrectas");

    //se guardan las respuestas del usuario
    answerOne = parseInt (prompt(qPrompt));
    answerTwo = parseInt (prompt(qJs));
    answerThree = parseInt (prompt(qHtml));
    
    var correctOne = "\n ", correctTwo = "\n ", correctThree = "\n ", incorrectOne = "\n ", incorrectTwo = "\n ", incorrectThree = "\n ";

    // comparamos pregunta 1
    while (answerOne===0 || answerOne>3) {//se valida que el usuario ingrese un numero del 1 al 3
        alert ("RESPUESTA INVALIDA EN PREGUNTA 1");
        answerOne = parseInt (prompt(qPrompt));
    } 
    if(answerOne===3){
        qPrompt = "¿QUÉ ES UN PROMPT?\n" + "<br/>" + "1.UN JUEGO\n" + "<br/>" + "2.UN ELEMENTO DE JAVA\n" + "<br/>" + "3.ELEMENTO DE JAVASCRIPT";
        correctOne = qPrompt + "<br/>TU RESPUESTA FUE LA No. " + answerOne + "<br/><br/>";
    } else {
        qPrompt = "¿QUÉ ES UN PROMPT?\n" + "<br/>" + "1.UN JUEGO\n" + "<br/>" + "2.UN ELEMENTO DE JAVA\n" + "<br/>" + "3.ELEMENTO DE JAVASCRIPT";
        incorrectOne = qPrompt + "<br/>TU RESPUESTA FUE LA NO. " + answerOne + "<br/><br/>";
    }

    // comparamos pregunta 2
    while (answerTwo===0 || answerTwo>2) {// || answerTwo!=true) {//se valida que el usuario ingrese un numero del 1 al 2
        alert ("RESPUESTA INVALIDA EN PREGUNTA 2");
        answerTwo = parseInt (prompt(qJs));
    }
    if(answerTwo===2){
        qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n" + "<br/>" + "1.AMBAS SON IGUALES\n" + "<br/>" + "2.NO SON IGUALES";
        correctTwo = qJs + "<br/>TU RESPUESTA FUE LA No. " + answerTwo + "<br/><br/>";
    } else {
        qJs = "¿ES LO MISMO JAVASCRIPT Y JAVA?\n" + "<br/>" + "1.AMBAS SON IGUALES\n" + "<br/>" + "2.NO SON IGUALES";
        incorrectTwo = qJs + "<br/>TU RESPUESTA FUE LA NO. " + answerTwo + "<br/><br/>";
    }

    // comparamos pregunta 3
    while (answerThree===0 || answerThree>3) { // || answerThree!=true) {//se valida que el usuario ingrese un numero del 1 al 3
        alert ("RESPUESTA INVALIDA EN PREGUNTA 3");
        answerThree = parseInt (prompt(qHtml));
    }
    if(answerThree===1){
        qHtml = "¿QUÉ ES EL HTML?\n" + "<br/>" + "1.UN INTERPRETE\n" + "<br/>" + "2.UN LENGUAJE DE PROGRAMACIÓN\n" + "<br/>" + "3.LAS 2 ANTERIORES";
        correctThree = qHtml + "<br/>TU RESPUESTA FUE LA No. " + answerThree + "<br/><br/>";
    } else {
        qHtml = "¿QUÉ ES EL HTML?\n" + "<br/>" + "1.UN INTERPRETE\n" + "<br/>" + "2.UN LENGUAJE DE PROGRAMACIÓN\n" + "<br/>" + "3.LAS 2 ANTERIORES";
        incorrectThree = qHtml + "<br/>TU RESPUESTA FUE LA NO. " + answerThree + "<br/><br/>";
    }
    
    //mostramos respuestas en la pagina
    answerContainer.innerHTML = uName + ", TUS RESPUESTAS FUERON:";
    
    corrects.innerHTML = correctOne +  "<br/>" + "<br/>" + correctTwo +  "<br/>" + "<br/>" + correctThree;
    incorrects.innerHTML = incorrectOne + "<br/>" + "<br/>" + incorrectTwo + "<br/>" + "<br/>" + incorrectThree;


}//Si no quiere jugar, la pagina se despide
else {
    answerContainer.innerHTML = "HASTA PRONTO " + uName;
    document.getElementById ("titulo1").innerHTML = " ";
    document.getElementById ("titulo2").innerHTML = " ";
 }
 */