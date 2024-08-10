const form = document.getElementById('form-contato');
let linhas = '';

const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaNumeros();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelefoneContato.value)){
        alert(`O telefone ${inputTelefoneContato.value} ja foi inserido`)
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td class="td-color">${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalInput(){
    return nomes.length;
}

function atualizaNumeros(){
    const total = totalInput();
    document.getElementById('total-numeros').innerHTML = total;
}