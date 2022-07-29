const inicio = document.querySelector('#inicio > .apresentacao');
const sobre = document.querySelector('#sobre > .container');
const projeto = document.querySelector('#projetos > .container');
const tecnoList = document.querySelectorAll('.hover');


function text(){
   const blink = document.querySelector('.blink');
   const textBlink = blink.innerHTML.split('');
   blink.innerHTML = '';

   printText(textBlink,blink)
}

text()

function printText(el,print){

   el.forEach((caractere, i)=>{
      setTimeout(()=>{print.innerHTML += caractere},90 * i)
   })

}


tecnoList[0].classList.add('selected');
for(let i = 0; i < tecnoList.length; i++){
   tecnoList[i].addEventListener('click', ()=>{
      
      for(let j = 0; j < tecnoList.length; j++){
         if (i == j){
            tecnoList[j].classList.add('selected')
         } else {
            tecnoList[j].classList.remove('selected')
         }
      }

   })
}