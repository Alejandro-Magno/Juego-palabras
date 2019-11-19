let palabra = ['camisa','zapato','gato','perro']




function play (palabra){
  
    let insertarEn = document.getElementById('spaces')
    let longitud = palabra.length
    let elemento = document.getElementById('spaces')



    for(i = 0; i < longitud; i++){

          
          div = document.createElement('div') //Creo el elemento div
          parrafo =document.createElement('p') // Creo el elemento parrafo
         

         
        
         parrafo.classList.add(`${i}`) //Le agrego al parrafo una clase dinamica
         div.classList.add(`letra`) // Le agrego al div una clase

         div.appendChild(parrafo) // Agrego al div el parrafo que cree
         elemento.appendChild(div) // Por ultimo le agrego al elemento el div
       
    }
     
   
}


play(palabra[0]);


function letra(palabra, letra){
let longitud = palabra.length


for(i = 0; i < 1; i++){
    a= document.getElementsByClassName(`${i}`)
    
    
    let clase = document.getElementsByClassName(`${i}`)
          
    console.log(`${a}`)
 
}
}

letra(palabra[0],'a')


























saludo = () => document.getElementById('play').addEventListener('click',()=>{
    document.getElementById('interfaz').style.display="block";
    
    document.getElementById('inicio').style.display="none";
   
    
 })

 

