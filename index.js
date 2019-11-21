
//Variables Globales

let palabra = [{1:'camisa',2:'ROPA'},
              {1:'zapato',2:'ROPA'}, 
              {1:'gato',2:'ANIMAL'},
              {1:'canada',2:'PAIS'},
              {1:'mexico',2:'PAIS'},
              {1:'italia',2:'PAIS'},
              {1:'gacela',2:'ANIMAL'},
              {1:'loro',2:'ANIMAL'},
              {1:'reloj',2:'ACCESORIO'},
              {1:'collar',2:'ACCESORIO'},
              {1:'falda',2:'ROPA'},
              {1:'correa',2:'ROPA'}, 
              {1:'mono',2:'ANIMAL'},
              {1:'rusia',2:'PAIS'},
              {1:'china',2:'PAIS'},
              {1:'turquia',2:'PAIS'},
              {1:'gusano',2:'ANIMAL'},
              {1:'camello',2:'ANIMAL'},
              {1:'arete',2:'ACCESORIO'},
              {1:'pulcera',2:'ACCESORIO'},
              {1:'sandra',2:'NOMBRE'},
              {1:'oscar',2:'NOMBRE'},
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

 ramdonpalabra = () => {
     random = Math.floor(Math.random() * `${palabra.length}`);
   

    if(PalabraSeleccion != `${palabra[random][1]}`){

        PalabraSeleccion = `${palabra[random][1]}`

    }else{
        random = Math.floor(Math.random() * `${palabra.length}`);

    }
    PalabraSeleccion = `${palabra[random][1]}`
    
    WordSize = PalabraSeleccion.length 

} // Elige una palabra random para el juego

 startGame =() => {


    document.getElementById('interfaz').style.display = "block"; //Muestra interfaz
    document.getElementById('inicio').style.display = "none"; // Oculta interfaz principal
    document.getElementById('hearts').style.display = "block"; //Muestra dialogo de vidas


    ramdonpalabra() //Asigna la palabra ramdon a la variable global
    
    restart()
    play(PalabraSeleccion);

     document.getElementById('racha').innerHTML ='Intenta adivinar la palabra'
    document.getElementById('titulo').innerHTML =`${palabra[random][2]}`

} //Inicia el juego

 play = palabra => {


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

 letra  = opcionUser => {
    
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

 validacion = ganar => {

 
    if(vidas == 4){
        document.getElementById("gato").src="imagenes/gatoquestion.gif";
        
    }

    if(vidas == 0){
        document.getElementById("gato").src="imagenes/gatoconsueño.gif";
        
    }

    
    Ganar()
    

    

  

} 

Ganar =() =>{
    if (aciertos == WordSize) {
        
        console.log('has ganado')
        document.getElementById("gato").src="imagenes/gatofeliz.gif";
        victorias++
        
        
       segundosfn()
        


    }

}// Verifica cuando se ha ganado

select  =texto  =>{

    opcionUser = `${texto.innerHTML}`.toLowerCase()
    letra(opcionUser)


    id = (`${texto.id}`)

    validacion()
    document.getElementById(`${id}`).setAttribute('disabled', '')



} // Substrae la opcion de los botones

 restart =()  =>{

    elemento = document.getElementById('spacesContainer')
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

} // Borra la interfaz principal

 restart2 =()=> {
   
    if(victorias>racha){
        racha = victorias
    }
    DeleteGameInterface() //Borramos interfaz de juego
    ramdonpalabra() // Seleccionamos una nueva palabra
    play(PalabraSeleccion) //Creamos una nueva interfaz
    StadisticsRestart() // Reiniciamos las estadisticas y botones
    document.getElementById('racha').innerHTML =`Mejor Racha: ${racha} Racha Actual ${victorias} Perdidas: ${derrotas}`


}// Reinicia la interfaz y estadisticas de juego

DeleteGameInterface =() =>{

    elemento = document.getElementById('spaces')
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

}

StadisticsRestart =contador =>{
    if(derrotas>0){

        vidas = 10
    }
    
    document.getElementById('vidaleft').innerHTML = `${vidas} `
    for (i = 1; i <= 27; i++) {
        document.getElementById(`bn${i}`).disabled = false;
    }

    aciertos = 0
    document.getElementById('titulo').innerHTML =`${palabra[random][2]}`
    document.getElementById("gato").src="imagenes/gato.gif";
  segundos = 4
}

let segundos=4
segundosfn =() =>{


 

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