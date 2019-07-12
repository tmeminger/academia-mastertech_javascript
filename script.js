function somar(a, b=9){
    return Number(a + b);
}

function fazerEscadinha(material, degraus){
    let escada = material;
    for (let i = 0; i < degraus; i++){
        console.log (escada);
        escada += material;
    }
}

function parOuImpar(a){
    if(a % 2 == 0){
        return 'É par!'

    }
    else{
        return 'É impar!'
    }
}
 const aleatorio =  function (min, max){
     return Math.floor (Math.random() * (max - min + 1) ) + min;
 } 