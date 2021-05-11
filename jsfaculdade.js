    function verificar() {
var n1 = document.getElementById('n1').value
var n2 = document.getElementById('n2').value
var soma = (Number(n1)+Number(n2))/2
var media = document.querySelector('p#media')
var res = document.querySelector('p#resultado')
var final = 10 - (soma)

if (n1 <0 || n2 < 0 || n1>10 || n2 >10){
    window.alert('[ERRO] Você inseriu valores incorretos.')
    return
} else {
if (soma <= 3.5) {
    res.innerText='Você está reprovado nessa disciplina!'
} else if (soma <7){
     res.innerHTML=`Você está de final e precisa tirar ${final} na prova.`
} else {
    res.innerText='Parabéns! Você está aprovado.'
  
    }
}
media.innerHTML=`Sua média é ${soma}`
}






