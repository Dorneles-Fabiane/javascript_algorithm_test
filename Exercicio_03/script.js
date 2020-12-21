var string1 = "fabiane";
var string2 = "diuliam";



const lettersSum = (string1, string2) => {
    //Your logic goes here
    var alfanum = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11,l:12, m:13, 
        n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
    var maior = 0; menor = 0;
    var resp = "";
    var char = "";
    var valor = 0;

    for (var posS1 = 0; posS1 < string1.length; posS1++) {
        char = string1.charAt(posS1);
        valor = Number(alfanum.char);
        if (char == alfanum[1][0]) {
            valor = alfanum[2]
        }
        if (maior < valor){
            maior = valor;
            console.log(valor)
        }        
    }

    for (var posS2 = 0; posS2 < string2.length; posS2++ ){

    }
    return maior;
    //return null;
}
//console.log(alfanum);
console.log(lettersSum(string1, string2))