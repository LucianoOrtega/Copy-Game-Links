// Escuchar el evento "keydown" para detectar cuando se presiona "Shift" + "C"
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.key === "C") {
    // Preguntar cuántos enlaces desea copiar
    var numLinks = prompt("¿Cuántos enlaces deseas copiar?", "0");

    // Convertir el valor ingresado por a un número entero
    numLinks = parseInt(numLinks);

    // Validar que el valor ingresado por sea un número válido
    if (!isNaN(numLinks) && numLinks > 0) {
      // Buscar todos los elementos que tengan la clase "search_result_row" y "ds_collapse_flag" en la página
      var searchResults = document.querySelectorAll(".search_result_row:not(.u--hide):not(.ds_owned):not(.ds_ignored)");

      // Iterar sobre los primeros "numLinks" elementos y obtener el valor del atributo "href" de cada uno
      var links = [];
      for (var i = 0; i < numLinks && i < searchResults.length; i++) {
        var link = searchResults[i].getAttribute("href");
        if (link) {
          links.push(link);
        }
      }

      // Copiar los links al portapapeles
      navigator.clipboard.writeText(links);

      // Mostrar una ventana para indicar que los enlaces se han copiado al portapapeles
      alert("Se han copiado " + links.length + " enlaces al portapapeles.");
    } else {
      // Mostrar un mensaje de error si el valor ingresado no es válido
      alert("Por favor ingresa un número válido.");
    }
  }
});
