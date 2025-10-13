function get_input() {
  let cpf = document.querySelector("#input").value;
  let novaLista = [];
  novaLista = cpf.replace(/\D/g, "").split("").map(Number);
  return novaLista;
}

function remove_last_twodigits() {
  novaLista = get_input();
  return novaLista.slice(0, -2);
}

function reject_sequences() {
  let novaLista = get_input();
  let i = 0;

  let true_list = [];

  for (i = 0; i < novaLista.length; i++) {
    if (novaLista[i] == novaLista[0]) {
      true_list.push(true);
    }
  }

  return true_list;
}

function calculate_tenthdigit() {
  let lista2 = remove_last_twodigits();
  let inverted = [...lista2.reverse()];

  let soma = 0;
  let tenth_digit;

  for (i = 0; i < inverted.length; i++) {
    if (i >= 0) {
      mult = inverted[i] * (i + 2);
      soma += mult;
    }
  }
  if (soma % 11 < 2) {
    tenth_digit = 0;
  } else {
    tenth_digit = 11 - (soma % 11);
  }
  lista2.reverse();
  lista2.push(tenth_digit);
  return lista2;
}

function calculate_eleventhdigit() {
  let lista2 = calculate_tenthdigit();

  let inverted = [...lista2.reverse()];
  let soma = 0;
  let eleventh_digit;
  for (i = 0; i < inverted.length; i++) {
    if (i >= 0) {
      mult = inverted[i] * (i + 2);
      soma += mult;
    }
  }
  if (soma % 11 < 2) {
    eleventh_digit = 0;
  } else {
    eleventh_digit = 11 - (soma % 11);
  }
  lista2.reverse();
  lista2.push(eleventh_digit);

  return lista2;
}

function verify_cpf() {
  let ideal_cpf = calculate_eleventhdigit();
  let novaLista = get_input();
  let true_list = reject_sequences();

  let cpf_equal;

  try {
      for ( i = 0; i < novaLista.length; i++) {
        if (true_list.length == 11) {
          cpf_equal = false;
        } else if (novaLista[i] === ideal_cpf[i]) {
          cpf_equal = true;
        } else {
          cpf_equal = false;
        }
      }

      if (cpf_equal == true) {
      } else {
        console.log(new Error("CPF invalido"))
      }

  } catch (err) {
    console.error(err)
  }

}