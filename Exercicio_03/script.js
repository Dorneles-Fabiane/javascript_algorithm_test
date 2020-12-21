var string1 = "dcb";
var string2 = "gdab";

const lettersSum = (string1, string2) => {
    //Your logic goes here
    var alfanum = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11,l:12, m:13, 
        n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
    var maior1 = 0; menor1 = 26;
    var maior2 = 0; menor2 = 26;
    var resp = 0;
    var char = "";
    var valor = 0, valor2 = 0;

    for (var posS1 = 0; posS1 < string1.length; posS1++) {
        char = string1.charAt(posS1);

        for (valor in alfanum) {
            if (valor == char) {
                valor = alfanum[valor];
            }
            if (maior1 < valor){
                maior1 = valor;
            } if (menor1 > valor) {
                menor1 = valor;
            }        
        }
    }

    for (var posS2 = 0; posS2 < string2.length; posS2++) {
        char = string2.charAt(posS2);

        for (valor2 in alfanum) {
            if (valor2 == char) {
                valor2 = alfanum[valor2];
            }
            if (maior2 < valor2){
                maior2 = valor2;
            } if (menor2 > valor2) {
                menor2 = valor2;
            }        
        }
    }
    console.log(`Maior 1: ${maior1}, Menor 1: ${menor1} // Maior 2: ${maior2}, Menor 2: ${menor2}`)
    resp = (maior1 * menor2) + (maior2 *  menor1);
    return resp;
}
console.log(lettersSum(string1, string2))