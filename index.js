
//Variables Globales

let palabra = [{1:'camisa',2:'ACCESORIO'},
              {1:'zapato',2:'ACCESORIO'}, 
              {1:'gato',2:'ANIMAL'},
              {1:'canada',2:'PAIS'},
              {1:'mexico',2:'PAIS'},
              {1:'canada',2:'PAIS'}
            
            
            
            ]
              






let acertijo
let vidas = 10
let aciertos = 0
let opcionUser = ''

let victorias = 0
let derrotas = 0

PalabraSeleccion = ''
let WordSize = 0

let random
let racha =0

function ramdonpalabra() {
     random = Math.floor(Math.random() * `${palabra.length}`);
   

    if(PalabraSeleccion != `${palabra[random][1]}`){

        PalabraSeleccion = `${palabra[random][1]}`

    }else{
        random = Math.floor(Math.random() * `${palabra.length}`);

    }
    PalabraSeleccion = `${palabra[random][1]}`
    
    WordSize = PalabraSeleccion.length 

} // Elige una palabra random para el juego

function startGame() {


    document.getElementById('interfaz').style.display = "block"; //Muestra interfaz
    document.getElementById('inicio').style.display = "none"; // Oculta interfaz principal
    document.getElementById('hearts').style.display = "block"; //Muestra dialogo de vidas


    ramdonpalabra() //Asigna la palabra ramdon a la variable global
    
    restart()
    play(PalabraSeleccion);

     document.getElementById('racha').innerHTML ='Intenta adivinar la palabra'
    document.getElementById('titulo').innerHTML =`${palabra[random][2]}`

} //Inicia el juego

function play(palabra) {


    let longitud = palabra.length
    let elemento = document.getElementById('spaces')



    for (i = 0; i < longitud; i++) {


        let div = document.createElement('div') //Creo el elemento div
        let parrafo = document.createElement('p') // Creo el elemento parrafo



        parrafo.setAttribute("id", `${i}`);

        div.classList.add(`letra`) // Le agrego al div una clase

        div.appendChild(parrafo) // Agrego al div el parrafo que cree


        elemento.appendChild(div) // Por ultimo le agrego al elemento el div
        let a = document.getElementById(`${i}`)
        a.innerHTML = `?`

    }


} //Crea la interfaz de juego

function letra( opcionUser) {
    
    let acum = 0 // Se declara aqui para que sea global a la funcion

    for (i = 0; i < WordSize; i++) {
       
        let ParrafoId = document.getElementById(`${i}`)

        letraPalabra = PalabraSeleccion[i] 

       if (letraPalabra == opcionUser) {


            ParrafoId.innerHTML = letraPalabra.toUpperCase()

            aciertos++
            acum++ //Se utiliza un acumulador ya que aciertos no puede ser reutilizada para
                  // esta validacion, ya que es necesaria en otros procesos.



        }


    }
    if (acum < 1) {
        vidas--
        acum = 0

            // Logica: Si el acumulador no encuentra ningun acierto por lo tanto
            //es menor a 1 entonces vidas se reducen en 1 y el acumulador vuelve a 0
            //Para ser reutilizado en el proximo ciclo
         
        if (vidas >= 0) {
            document.getElementById('vidaleft').innerHTML = `${vidas} `
        } // Esto es para que las vidas se actualicen hasta 0 y no numeros negativos


    }
    if (vidas < 1) {

        overlay.classList.add('active');
        popup.classList.add('active');

    } // Esto es para que si pierdes salga una ventana



} // Funcionamientos de botones

function validacion(ganar) {

 
    if(vidas == 4){
        document.getElementById("gato").src="imagenes/gatoquestion.gif";
        
    }

    if(vidas == 0){
        document.getElementById("gato").src="imagenes/gatoconsueño.gif";
        
    }

    
    Ganar()
    

    

  

} // Verifica cuando se ha ganado

function Ganar(){
    if (aciertos == WordSize) {
        
        console.log('has ganado')
        document.getElementById("gato").src="imagenes/gatofeliz.gif";
        victorias++
        
        
       segundosfn()
        


    }

}

function select(texto) {

    opcionUser = `${texto.innerHTML}`.toLowerCase()
    letra(opcionUser)


    id = (`${texto.id}`)

    validacion()
    document.getElementById(`${id}`).setAttribute('disabled', '')



} // Substrae la opcion de los botones

function restart() {

    elemento = document.getElementById('spacesContainer')
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

} // Borra la interfaz principal

function restart2(contador) {
   
    if(victorias>racha){
        racha = victorias
    }
    DeleteGameInterface() //Borramos interfaz de juego
    ramdonpalabra() // Seleccionamos una nueva palabra
    play(PalabraSeleccion) //Creamos una nueva interfaz
    StadisticsRestart(contador) // Reiniciamos las estadisticas y botones
    document.getElementById('racha').innerHTML =`Mejor Racha: ${racha} Racha Actual ${victorias} Perdidas: ${derrotas}`


}// Reinicia la interfaz y estadisticas de juego

function DeleteGameInterface(){

    elemento = document.getElementById('spaces')
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

}

function StadisticsRestart(contador){
    if(derrotas>0){

        vidas = 10
    }
    
    document.getElementById('vidaleft').innerHTML = `${vidas} `
    for (i = 1; i <= 26; i++) {
        document.getElementById(`bn${i}`).disabled = false;
    }

    aciertos = 0
    document.getElementById('titulo').innerHTML =`${palabra[random][2]}`
    document.getElementById("gato").src="imagenes/gato.gif";
  segundos = 4
}

let segundos=4
function segundosfn(){


 

    setTimeout(() => {
       segundos--
       document.getElementById('titulo').innerHTML =`Siguiente palabra en: ${segundos} segundos`
        setTimeout(() => {
            segundos--
            document.getElementById('titulo').innerHTML =`Siguiente palabra en: ${segundos} segundos`
             setTimeout(() => {
                segundos--
                document.getElementById('titulo').innerHTML =`Siguiente palabra en: ${segundos} segundos`
                setTimeout(() => {
                    document.getElementById('titulo').innerHTML =`Siguiente palabra en: ${segundos} segundos`
                    restart2()
                }, 1000);
             }, 1000);

        }, 1000);
        
    }, 1000);

 


}