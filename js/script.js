$(document).ready(function(){
    
    function obtenerYMostrarImagenes() {
      var limiteInferior = parseInt($('#limite-inferior').val());
      var limiteSuperior = parseInt($('#limite-superior').val());
  
      if (limiteInferior >= limiteSuperior) {
        alert("El límite inferior debe ser menor que el límite superior");
        return;
      }
  
      $('#imagenes-container').empty();
  
      var cantidadImagenes = $('#mostrar-una').prop('checked') ? 1 : (limiteSuperior - limiteInferior + 1);
  
      for (var i = 0; i < cantidadImagenes; i++) {
        var numeroImagen = $('#mostrar-una').prop('checked') ? limiteInferior : (limiteInferior + i);
        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + numeroImagen, function(data) {
          var imagen = $('<img>').attr('src', data.url).css({'width': '100px', 'height': '100px', 'padding': '5px'});
          $('#imagenes-container').append(imagen);
        });
      }
    }
  
    $('#mostrar-btn').click(function(){
      obtenerYMostrarImagenes();
    });
  });
  
