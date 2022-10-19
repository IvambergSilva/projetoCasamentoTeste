let codigoPessoas01 = ['AE2022E1', 'AE2022K2', 'AE2022W3', 'AE2022P5',  'AE2022I5', 'AE2022Z6'];
let codigoPessoas02 = ['AE2022E7', 'AE2022K8', 'AE2022W8', 'AE202275',  'AE202287', 'AE202206'];

document.querySelector('#botaoCodigo').addEventListener('click',  () => {
    let codigo = document.querySelector('#codigo').value.toUpperCase();
    codigoPessoas01.map((elemento) => {
        if (elemento == codigo){
            window.location.href = 'convidados/index01.html'
        }
    })
    codigoPessoas02.map((elemento) => {
        if (elemento == codigo){
            window.location.href = 'convidados/index02.html'
        }
    })
})

