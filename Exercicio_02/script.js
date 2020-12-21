const replaceChar = (sequencia, limit) => {
    var char, limite, tamanho, lastChar, cont = 0, resp = "";

    if (sequencia == "" || limit == "" || limit < 1) {
        window.alert("[ERRO] Informe valores válidos!")
        return;
    }

    for (var voltas = 0; voltas < sequencia.length; voltas++) {
        char = sequencia.charAt(voltas);
        limite = limit;
        cont = voltas;

        if  (char != "?") {
            resp += sequencia.charAt(voltas)
        } else if (char == "?" && voltas == 0) {
            tamanho = sequencia.length - 1;
            lastChar = sequencia.charAt(tamanho);
            if (lastChar != "?"){
                while (limite > 0) {
                    resp += sequencia.charAt(tamanho);
                    limite--;
                }
            } else {
                while (lastChar == "?") {
                    tamanho--;
                    lastChar = sequencia.charAt(tamanho);
                } while (limite > 0) {
                    resp += sequencia.charAt(tamanho);
                    limite--;
                }
            }
        } else if (char == "?") {
            while (char == "?") {
                cont++;
                char = sequencia.charAt(cont);
            }
            while (limite > 0) {
                resp += resp.charAt(resp.length - 1);
                limite--;

            }
        }
    }
    return resp;
}

verificar = document.getElementById("btnVerificar");
verificar.addEventListener('click', () => {
    var sequencia = document.getElementById("inString").value;
    var inTimes = document.getElementById("inTimes");
    var times = Number(inTimes.value);
    var resp = replaceChar(sequencia, times);
    document.getElementById("resposta").innerText = resp;
});