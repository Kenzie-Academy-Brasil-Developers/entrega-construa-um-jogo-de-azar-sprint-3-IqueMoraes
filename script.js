
    //disponibilizar as opções e coletar a informação da mão escolhida. - feito
    //sortear a mão do computador -- FEITO
    //fazer comparação de jogo - feito
    // registrar vitórias e perdas - feito

    const pedra = document.getElementById('pedra')
    const papel = document.getElementById('papel')
    const tesoura = document.getElementById('tesoura')
    const maoJogador = document.getElementById('maoJogador')
    const maoRakku = document.getElementById('maoRakku')
    const opcoesJogador = document.getElementById('opcoesJogador')
    const pontosJogador = document.getElementById('pontosJogador')
    const pontosRukka = document.getElementById('pontosRakku')
    const pontosEmpate = document.getElementById('pontosEmpate')
    const imagensRiscos = ["./imgs/scratch1.png", "./imgs/scratch2.png", "./imgs/scratch3.png","./imgs/scratch4.png"]
    const contagemDePartidas = document.getElementById('contagemDePartidas')
    const botao = document.getElementById('botaoReiniciar')




// function sortido(){
// // return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// const ppt = [a,b,c];

// return ppt[Math.floor(Math.random() * 3)];
// }

let player;
let rakku;
let totalPontosJogador = 0;
let totalPontosRukka = 0;
let totalPontosEmpate = 0;
let totalPartidas = 5;



    function lanceMaoRakku(){
        const ppt = ["pedra", "papel", "tesoura"];
        return ppt[Math.floor(Math.random() * 3)]
    }

    function vitoria(a, b){

        if( a === b){
            console.log("Empate!")
            //aparece a imagem da gota
            return 3
        }
        else if(a === "pedra" && b === "papel"){
            //vitoria do computador
            console.log("b venceu com o papel");
            return 2
        }
        else if(a === "papel" && b === "tesoura"){
            //vitoria do computador
            console.log("b venceu com a tesoura");
            return 2

        }
        else if(a === "tesoura" && b === "pedra"){
            //vitoria do computador
            console.log("b venceu com a pedra")
            return 2
        }
        else{
            console.log("Player venceu!");
            return 1
        }

    }

    function partida(a, b){
        if(vitoria(a, b)=== 1){
            totalPontosJogador++
        }
        else if(vitoria(a, b) === 2){
            totalPontosRukka++
        }else{
            totalPontosEmpate++
        }
        pontosJogador.innerHTML = totalPontosJogador
        pontosRukka.innerHTML = totalPontosRukka
        pontosEmpate.innerHTML = totalPontosEmpate

        totalPartidas--
        contagemDePartidas.innerHTML = totalPartidas
        // const img = document.createElement('img')
        // const figure = document.createElement('figure')
        // img.setAttribute('src', imagensRiscos[Math.floor(Math.random() * 4)])
        // figure.appendChild(img)
        // contagemDePartidas.appendChild(figure)
    }



function atribuicaoMao(competidorHumano, maoHumana, competidorRobo, maoRobotica){
    const imgHumana = document.createElement('img')
    imgHumana.className ='maoNaMesa'
    const pHumana = document.createElement('p')
    pHumana.className ='nomeMao'
    pHumana.innerText = maoHumana
    imgMao = './imgs/mao-humana-'+maoHumana+'.png'
    imgHumana.setAttribute('src', imgMao)
    competidorHumano.appendChild(pHumana)
    competidorHumano.appendChild(imgHumana)



    const imgRobotica = document.createElement('img')
    imgRobotica.className ='maoNaMesa'
    const pRobotica = document.createElement('p')
    pRobotica.className = 'nomeMao'
    pRobotica.innerText = maoRobotica
    imgRakku = './imgs/mao-robotica-'+maoRobotica+'.png'
    imgRobotica.setAttribute('src', imgRakku)
    competidorRobo.appendChild(imgRobotica)
    competidorRobo.appendChild(pRobotica)



}

opcoesJogador.addEventListener('click', (e) => {
    if(maoJogador.childElementCount > 0){
        while (maoJogador.firstChild) {
            maoJogador.removeChild(maoJogador.firstChild);
          }
    }
    if(maoRakku.childElementCount > 0){
        while (maoRakku.firstChild) {
            maoRakku.removeChild(maoRakku.firstChild);
          }
    }

    rakku = lanceMaoRakku()
if(totalPartidas >0){
    atribuicaoMao(maoJogador, `${e.target.id}`, maoRakku, `${rakku}`)
    partida(`${e.target.id}`, rakku)
}

})


botao.addEventListener('click', reset = () =>{
    location.reload()
});