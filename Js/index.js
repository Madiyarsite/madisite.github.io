'use strict'

let sliderImg = document.querySelectorAll('.slider_image'),
    sliderNext = document.querySelector('.slider_next'),
    sliderPrew = document.querySelector('.slider_prew'),
    sliderDote = document.querySelectorAll('.slider_dote');
   
 let index = 0; 

function del(){
    sliderImg.forEach((item)=>{
        item.classList.add('disable');
    });
    sliderDote.forEach((item)=>{
        item.classList.remove('actived'); 
    });
}


del();

function slid(i){
    sliderImg[i].classList.remove('disable');
    sliderDote[i].classList.add('actived');
}
slid(index);
sliderPrew.addEventListener('click', function(){
   del();
   slid(index--);
   if(index < 0){
       index = 2;
   }
  
});
sliderNext.addEventListener('click', ()=>{
    del();
    slid(index++);
    if(index > 2){
        index = 0;
    }
});
