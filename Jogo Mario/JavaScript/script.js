const mario= document.querySelector('.mario');/*criando uma variável para a classe mario*/
const pipe = document.querySelector('.pipe');/*Criando uma variável para a classe pipe*/

let score = 0;
const scoreSpan = document.getElementById('score');
scoreSpan.innerText = score;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)
    /*para que ele possa realizar o método pulo várias vezes precisa usar o setTimeout para remover a função e ela abrir novamente*/
}

  
const loop =setInterval(()=>{

    const pipePosition = pipe.offsetLeft; /* Colocando a parte que o mario bate no cano numa variável*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); /*essa função pega qualquer característica do css, no caso pega a posição do mario em relação ao chão */

    if ((pipePosition <= 128) && (pipePosition > 0) && (marioPosition < 90)){
        pipe.style.animation = 'none';/*Quando ele colidir no cano vai parar a animação */
        pipe.style.left = `${pipePosition}px`; /*Ele irá se manter na mesma posição */ 


        mario.style.animation = 'none';/*Quando ele colidir no cano vai parar a animação */
        mario.style.bottom = `${marioPosition}px`; /*Ele irá se manter na mesma posição em que colidiu*/ 

        mario.src='imagens/game-over.png';/* Quando o mario colidir vai aparecer essa imagem*/
        mario.style.width = '85px';/*mudando o tamanho da imagem */
        mario.style.margin = '60px';

        clearInterval(loop);/*limpa o loop */
    }
    else if((marioPosition>90) && (pipePosition<=0)){
        score+=1;
        scoreSpan.innerText =score;
    }
},10)


document.addEventListener('keydown',jump); /*evento que pula quando clicar em uma tecla*/