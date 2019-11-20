var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    



  
  btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
    popup.classList.remove('active');
    


    victorias = 0
    derrotas++
    restart2()
   
});

function cerrar (){
    window.location.reload();
}

