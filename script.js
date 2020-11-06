let e = document.querySelector('.text')
let cursor = document.querySelector('.cursor')
function checkKey() {
  if( (event.keyCode >=1072 && event.keyCode <= 1103)|| (event.keyCode >=97 && event.keyCode <= 122)){
    newText = event.key      
    e.innerHTML +=  ` <div class="added-text fading" >${newText}</div>`    
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
  });
    let addedText = document.querySelectorAll('.fading')/* */
    if(addedText.length>1){
      addedText[0].classList.remove('fading')
    } 
  }
}