const body = document.querySelector('body')
const menuToggle = document.querySelector('.menu-toggle')
const projetos = document.querySelectorAll('#projetos label > a')
const mobilemenu = document.querySelector('.mobile-menu')
const li = document.querySelectorAll('nav a')

menuToggle.addEventListener('click', ()=>{
   menuToggle.classList.toggle('active')
   if (mobilemenu.classList.toggle('active')) {
      body.style.overflowY = 'hidden'
   } else {
      body.style.overflowY = 'auto'
   }

})

function removeActive(){
   menuToggle.classList.remove('active')
   mobilemenu.classList.remove('active')
   body.style.overflowY = 'auto'
}


li.forEach(item =>{
   item.addEventListener('click', scrollId)
})

function scrollId(e){
   e.preventDefault()
   const to = getScrollTop(e.target) - 50

   scrollPosition(to)
   removeActive()
}

function scrollPosition(to){
   window.scroll({
      top: to,
      behavior: 'smooth' 
   })
}

function getScrollTop(el){
   const id = el.getAttribute('href')
   return document.querySelector(id).offsetTop;
}
