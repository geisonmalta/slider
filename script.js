//pega todos os slider--item que tem no html
let totalSlides = document.querySelectorAll('.slider--item').length;
//Variavel de ambiente. Sempre vai começar pelo slide 0
let currentSlide = 0;

// pega a class slider--width e muda a largura usando o calc que calcula, vezes a quantidade de sliders que tem no html
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
//configurar a altura do slider--controls pegando a altura do slider e colocando no slider--controls
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
   currentSlide--; // vai pegar o currentSlide e diminuir para voltar uma imagem
   if(currentSlide < 0) { // se currentSlide for menor do que 0
         currentSlide = totalSlides -1; //vai para o ultimo slide
   }
   updateMargin(); //atualiza a margem para o slide rodar
}

function goNext() {
   currentSlide++; //vai pegar o currentSlide e acrescentar para ir para a próxima imagem
   if(currentSlide > (totalSlides-1)) { //se currentSlide for maior que o total de slides - 1
      currentSlide = 0; //volta para o começo, para o currenteSlide 0
   }
   updateMargin(); //atualiza a margem para o slide rodar
}

function updateMargin() { // é o que realmente faz o processo acontecer
   let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
   let newMargin = (currentSlide * sliderItemWidth);
   document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}
   setInterval(goNext, 5000);