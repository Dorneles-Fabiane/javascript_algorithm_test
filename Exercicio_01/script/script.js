//Falta implementar as verificações!


function removeRepeated (sequenciaLetras, limite) {
  var sequenciaTratada = "" ;
  var limit = 0;
  var char1, char2;

  for (var cont = 0; cont < sequenciaLetras.length; cont++) {
    char1 = sequenciaLetras.charAt(cont);
    char2 = sequenciaLetras.charAt(cont + 1);
  
    if (char1 != char2) {
      sequenciaTratada += char1;
      limit = limite;
    } else if (char1 == char2) {
        if (limit == 0) {
          limit = limite;
        }
      sequenciaTratada += char1;
      limit--;
      while (limit == 0 && char1 == char2) {
        cont++;
        char1 = sequenciaLetras.charAt(cont);
        char2 = sequenciaLetras.charAt(cont + 1);
      }
    }
  }
  return sequenciaTratada;
} 
btnResp = document.querySelector("button#btnResp");
btnResp.addEventListener('click', () => {
  var sequenciaLetras = document.getElementById("inLetras").value.toUpperCase();
  var inLimite = document.querySelector("input#inLimite");
  var limite = Number(inLimite.value);
  var resposta = removeRepeated(sequenciaLetras, limite);
  document.getElementById("resp").innerHTML = resposta;
});