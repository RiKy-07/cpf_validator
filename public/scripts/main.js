let cpf = "123.456.789-87";
// let cpf = "183.328.348-13";
let novaLista = [];

novaLista = cpf.replace(/\D/g, "").split("").map(Number);

function remove_last_twodigits (){
    return novaLista.slice(0,-2);
}

function calculate_tenthdigit(){
    let lista2 = remove_last_twodigits();
    let inverted = [...lista2.reverse()];
    let soma = 0;
    let tenth_digit;
    for(i= 0 ; i<inverted.length; i++){
        if (i>=0){
            mult = inverted[i]*(i+2);
            soma += mult;
        }      
    }
    if(soma%11 < 2){
        tenth_digit=0;
    }else{
        tenth_digit = 11 - (soma%11);
    }
    lista2.reverse();
    lista2.push(tenth_digit);
    return lista2;
}

function calculate_eleventhdigit (){
    let lista2 = calculate_tenthdigit();

    let inverted = [...lista2.reverse()];
    let soma = 0;
    let eleventh_digit;
    for(i= 0 ; i<inverted.length; i++){
        if (i>=0){
            mult = inverted[i]*(i+2);
            soma += mult;
        }      
    }
    if(soma%11 < 2){
        eleventh_digit=0;
    }else{
        eleventh_digit = 11 - (soma%11);
    }
    lista2.reverse();
    lista2.push(eleventh_digit);

    return lista2;
}

let ideal_cpf = calculate_eleventhdigit();
let cpf_equal;

for(i=0; i<novaLista.length; i++){
        if(novaLista[i] === ideal_cpf[i]){
            cpf_equal = true;
        }else{
            cpf_equal = false; 
        }
}

if(cpf_equal == true){
    console.log("Valid CPF");
}else{
    console.log("Invalid CPF");
}