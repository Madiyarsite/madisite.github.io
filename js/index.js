'use strict'

let sliderImg = document.querySelectorAll('.slider_image'),
sliderNext = document.querySelector('.slider_next'),
sliderPrew = document.querySelector('.slider_prew'),
sliderDote = document.querySelector('.slider_dote'),
sliderDotes = document.querySelector('.slider_dotes'),
sliderDot = document.createElement("div");

// let index = 0;


let index = 0;

function del(a){
    sliderImg.forEach((item)=>{
        item.classList.add('disable');
    });
    sliderImg[a].classList.remove('disable');
    
}
del(index);

sliderNext.addEventListener('click', function(){
    index++;
     let len = sliderImg.length;
     if(len == index){
         index = 0;
     }
    
    
    del(index);
});

sliderPrew.addEventListener('click', function(){
    
     let len = sliderImg.length;
     if(index == 0){
         index = len;
     }
    index--;
    
    del(index);
});
