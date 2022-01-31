let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o Segundo valor:'));
let resultado;

resultado = n1 + n2;

if(n1 == n2){
    if(resultado == 10){
        alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é igual que 10, e menor que 20.`)
    } else if(resultado == 20){
        alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10, e igual que 20.`)
    } else if(resultado < 10 && resultado < 20){
        alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é menor que 10, e menor que 20.`)
    } else if(resultado > 10 && resultado > 20){
        alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10, e maior que 20.`)
    } else if(10 < resultado < 20){
        alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10, e menor que 20.`)
    }}
        
    else {
        if(resultado == 10){
            alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é igual que 10, e menor que 20.`)
        } else if(resultado == 20){
            alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é maior que 10, e igual que 20.`)
        } else if(resultado < 10 && resultado < 20){
            alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é menor que 10, e menor que 20.`)
        } else if(resultado > 10 && resultado > 20){
            alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é maior que 10, e maior que 20.`)
        } else if(10 < resultado < 20){
            alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é maior que 10, e menor que 20.`)
        }
}