
    let e = document.querySelector('.text')

    const fadeIn = (e) =>{
      let opacity = 0.01
      e.innerHTML +=  ` <div class="added-text" style="opacity:${opacity}">${newText}</div>`
      let timer = setInterval(()=>{
        if(opacity >=1){
          clearInterval(timer)
          e.onkeydown=press;
        }
        let arr = document.querySelectorAll('.added-text') 
        arr[arr.length-1].style.opacity = opacity
        opacity += opacity * 0.1
      }, 30)
    }
    function checkKey() {
      if( (event.keyCode >=1072 && event.keyCode <= 1103)|| (event.keyCode >=97 && event.keyCode <= 122)){
        newText = event.key          
        fadeIn(e)
        
      }
    }