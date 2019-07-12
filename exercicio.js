let idade = Number(prompt("Digite sua idade"));
let emprestimo = Number (prompt("Digite o valor do empréstimo"));
let salario = Number (prompt("Digite seu salário"));
let parcelas = Number (prompt("Digite a quantidade de parcelas"));

function propostaDeEmprestimo (idade, emprestimo, salario, qtdParcelas){
    if (idade >= 22 && idade <= 55 && emprestimo >= 1000 && salario < salario * 15 && qtdParcelas <= 3 && qtdParcelas >= 20){
        console.log('Aceito');
    }
    

    else {
        console.log ('Não aceito');
        let montante;
        montante = emprestimo * (1 + 0.08) ** qtdParcelas;
        let parcela = montante/qtdParcelas; 
        console.log(`O valor total do empréstimo é de ${montante} e o valor da parcela é de ${parcela}`);
    }

}

function juros (parcelas, juros, emprestimo){
    if (parcelas >= 3 && parcelas <= 20);

}

