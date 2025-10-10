let cpf = "123.456.789-87";
let novaLista = [];

novaLista = cpf.replace(/\D/g, "").split("").map(Number);

function remove_last_twodigits (){
    return novaLista.slice(0,-2);
}

function calculate_tenthdigit(){
    let lista2 = remove_last_twodigits();
    let numeroAtual;
    let mult;
    let inverted = [];

    for(i= 0 ; i<lista2.length; i++){
        numeroAtual = lista2[lista2.length-1-i];
        inverted.push(numeroAtual);

        for(n=0; n<inverted.length; n++){
            if (i >= 2){
            mult = inverted*i;
        }
        
        }console.log(inverted[n])
    }

}

calculate_tenthdigit();




// for (let i = 0; i <= cpf.length-1; i++) {
//     let numero = Number(cpf[i]);
//     console.log(numero)
//     if (!Number.isNaN(numero)) {
//         novaLista.push(numero);
//     }
// }

// console.log(novaLista)














// function remove_dots (){
//     return cpf.replaceAll(".", "");
// }

// function remove_hyphen(){
//     return cpf.replace("-","");
// }

// /*function convert_to_string(){
//     const cpf_without_points= remove_dots();
//     const cpf_without_points = remove_hyphen();
    
     
      
//      return  Sting(cpf)
// }*/

// function convert_to_string(){
//     cpf = remove_dots();
//     cpf = remove_hyphen();
//     return cpf;
// }

// function convert_to_number(){
//    const cpfNumber= Number(cpf)
//          console.log(typeof cpfNumber);
//          cpf = cpfNumber
//     return cpf;
// }

// function convert_to_array(){
//     cpf = convert_to_number();
//     cpf = cpf.split('')
//     console.log(cpf);
// }

// convert_to_array();