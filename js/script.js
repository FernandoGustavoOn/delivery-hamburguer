var mistoQuente = document.querySelector("#misto-quente")
var nomeparamodal = document.querySelector("#exampleModalToggleLabel")
var addCarrinho = document.querySelector("#addCarrinho")
var noCarrinho = document.getElementById('noCarrinho')
var goCarrinho = document.getElementById('goCarrinho')
var valorTotal = document.getElementById('valorTotal')
var qtdLanches = document.querySelector("#qtdLanche")
var adicinarMais = document.getElementById('mais')
var adicionarMenos = document.getElementById('menos')
var bomba = document.getElementById('bomba')
var xTudo = document.getElementById('x-tudo')
var xTudoFrango = document.getElementById('x-tudo-frango')
var xBrocado = document.getElementById('x-brocado')
var heineken = document.getElementById('heineken')
var brahma = document.getElementById('brahma')
var coca = document.getElementById('coca')
var guarana = document.getElementById('guarana')
var fanta = document.getElementById('fanta')
var excluirTotal = document.getElementById('menosT')
var divexcluir = document.getElementById('excluir')
var divTotal = document.getElementById('totalPedido')
var divFinalizar = document.getElementById('finalizar')
var divnadaNoCarrinho = document.getElementById('nadaNoCarrinho')
var imagemDoPedido = document.getElementById('imagemDoPedido')
var nomeDoPedido = document.getElementById('exampleModalToggleLabel')
var divNotificacao = document.getElementById('divNotificacao')
var imgBottom = document.getElementById('imgBottom')
var imgup = document.getElementById('imgUp')
var menu = document.getElementById('menu')
var nome = document.getElementById('nome')
var opcaonoCarrinho = document.getElementById('opcao')
var qtdOpcaoCarrinho = document.getElementById('qtdOpcao')
var totalPreco = document.getElementById('totalOpcao')
var legenda1 = document.getElementById('legenda')
var opcaolanche = ""
var soma = 0
var valorPedido = 0
var totalLanche = 0
var lanches = [
    {nome: 'Misto Quente', valor: 4.00},
    {nome: 'Bomba', valor: 8.00},
    {nome: 'X tudo', valor: 17.00},
    {nome: 'X-tudo de frango', valor: 19.00},
    {nome: 'X-brocado', valor: 25.00},
    {nome: 'Heineken', valor: 8.00},
    {nome: 'Brahma', valor: 3.00},
    {nome: 'Coca-Cola', valor: 6.00},
    {nome: 'Guaraná', valor: 5.00},
    {nome: 'Fanta', valor: 4.00}
]

/* Login */
function pegarNome(){
        localStorage.nome = document.getElementById('nome').value
}
(function(){
    document.getElementById('digitado').innerHTML = localStorage.nome + " ✌🍔 !"
    console.log(localStorage.nome)
})();
function DezSegundos(){
    divNotificacao.style.display = "none"
}
setTimeout(DezSegundos, 1000*9.5);
/* Dentro do modal */
adicinarMais.addEventListener('click', ()=>{
    let qtdlanchess = Number(qtdLanches.value)
    qtdLanches.value = qtdlanchess + 1
})
adicionarMenos.addEventListener('click', ()=>{
    if(qtdLanches.value <= 1){
        adicionarMenos.event.preventDefault();
    }else{
        let qtdlanchess = Number(qtdLanches.value)
        qtdLanches.value = qtdlanchess - 1
    }
})
menu.addEventListener('click', ()=>{
    if(imgBottom.style.display == "block"){
        imgBottom.style.display = "none"
        imgup.style.display = "block" 
    }else{
        imgBottom.style.display = "block"
        imgup.style.display = "none" 
    }      
})

mistoQuente.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[0].nome
    imagemDoPedido.innerHTML = "<img src='../img/mistoquente.png' width='200px'>"
    valorPedido = lanches[0].valor
    opcaolanche = "<img src='../img/mistoquente.png' width='65px'>" + lanches[0].nome
})
bomba.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[1].nome
    imagemDoPedido.innerHTML = "<img src='../img/bomba.png' width='200px'>"
    valorPedido = lanches[1].valor
    opcaolanche = "<img src='../img/bomba.png' width='65px'>" + lanches[1].nome
})
xTudo.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[2].nome
    imagemDoPedido.innerHTML = "<img src='../img/xtudo.png' width='200px'>"
    valorPedido = lanches[2].valor
    opcaolanche = "<img src='../img/xtudo.png' width='65px'>" + lanches[2].nome
})
xTudoFrango.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[3].nome
    imagemDoPedido.innerHTML = "<img src='../img/xtudofrango.png' width='200px'>"
    valorPedido = lanches[3].valor
    opcaolanche = "<img src='../img/xtudofrango.png' width='65px'>" + lanches[3].nome
})
xBrocado.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[4].nome
    imagemDoPedido.innerHTML = "<img src='../img/xbrocado.png' width='200px'>"
    valorPedido = lanches[4].valor
    opcaolanche = "<img src='../img/xbrocado.png' width='65px'>" + lanches[4].nome
})
heineken.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[5].nome
    imagemDoPedido.innerHTML = "<img src='../img/heineken.png' width='150px'>"
    valorPedido = lanches[5].valor
    opcaolanche = "<img src='../img/heineken.png' width='30px'>" + lanches[5].nome
})
brahma.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[6].nome
    imagemDoPedido.innerHTML = "<img src='../img/brahma.png' width='150px'>"
    valorPedido = lanches[6].valor
    opcaolanche = "<img src='../img/brahma.png' width='30px'>" + lanches[6].nome
})
coca.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[7].nome
    imagemDoPedido.innerHTML = "<img src='../img/coca.png' width='150px'>"
    valorPedido = lanches[7].valor
    opcaolanche = "<img src='../img/coca.png' width='30px'>" + lanches[7].nome
})
guarana.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[8].nome
    imagemDoPedido.innerHTML = "<img src='../img/guarana.png' width='150px'>"
    valorPedido = lanches[8].valor
    opcaolanche = "<img src='../img/guarana.png' width='30px'>" + lanches[8].nome
})
fanta.addEventListener(`click`, ()=>{
    nomeDoPedido.innerHTML = lanches[9].nome
    imagemDoPedido.innerHTML = "<img src='../img/fanta.png' width='150px'>"
    valorPedido = lanches[9].valor
    opcaolanche = "<img src='../img/fanta.png' width='30px'>" + lanches[9].nome
})
/* Adicinar no carrinho */
addCarrinho.addEventListener('click', ()=>{
    divnadaNoCarrinho.style.display = "none"
    totalPedido.style.display = "block"
    divexcluir.style.display = "block"
    divFinalizar.style.display = "block"
    legenda1.style.display = "block"
    if(qtdLanches.value <= 0){
        alert("Numero menor ou igual a zero")
    }else{
      var opcao = opcaolanche
      var qtd = qtdLanches.value
      totalLanche = valorPedido * qtd
      noCarrinho.innerHTML += `<div><p class="noCarrinho">${opcao}     |    ${qtd}    |    R$${totalLanche},00</p></div>`
      /* noCarrinho.innerHTML += `<div class="d-flex"><p class="noCarrinho"><div>${opcao}      </div><div>${qtd}      </div><div>    R$${totalLanche},00</div></p></div>` */
      soma += totalLanche
      valorTotal.innerHTML = `R$${soma},00`
      qtdLanches.value = 1  
    }  
})
excluirTotal.addEventListener('click', ()=>{
        divnadaNoCarrinho.style.display = "block"
        soma = 0
        valorTotal.innerHTML = `R$${soma},00`
        noCarrinho.innerHTML = "<p></p>"
        divexcluir.style.display = "none"
        totalPedido.style.display = "none"
        divFinalizar.style.display = "none"
        legenda1.style.display = "none"
})
