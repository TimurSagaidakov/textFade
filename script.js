
    let e = document.querySelector('.text')
    /*const fadeIn = (e) =>{
      let opacity = 0.01
      e.innerHTML +=  ` <div class="added-text fading" style="opacity:${opacity}">${newText}</div>`
      let timer = setInterval(()=>{
        if(opacity >=1){
          clearInterval(timer)
        }
        let arr = document.querySelectorAll('.added-text') 
        arr[arr.length-1].style.opacity = opacity
        opacity += opacity * 0.1
      }, 30)
    } */
    function checkKey() {
      if( (event.keyCode >=1072 && event.keyCode <= 1103)|| (event.keyCode >=97 && event.keyCode <= 122)){
        newText = event.key      
        //fadeIn(e)
        e.innerHTML +=  ` <div class="added-text fading" >${newText}</div>`    
        let addedText = document.querySelectorAll('.fading')/* */
        /*for(let i = 0 ;i<addedText.length; i++){
          let style = window.getComputedStyle(addedText[i])
          if(style.opacity === '1'){
            addedText[i].classList.remove('fading')
          }
        } */
        if(addedText.length>1){
          addedText[0].classList.remove('fading')
        } 
        /*setTimeout(()=>{
        },1) */
      }
    }