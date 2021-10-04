const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselIndicators = document.querySelectorAll(".indicators img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
//width of image - hoe much to slide
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', ()=>{
    //if(counter>=carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    
    
    if(counter < carouselImages.length){
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }else{
        counter = 0;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
   
    setIndicatorNext(counter);
});


prevBtn.addEventListener('click', ()=>{
   // if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    if(counter < 0){
        counter = carouselImages.length -1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }else{
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    setIndicatorPrev(counter);
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none"; //return to first image without animation
        counter = carouselImages.length - 2;  // -2 because of the 2 clones
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none"; //return to first image without animation
        counter = carouselImages.length - counter;  // -2 because of the 2 clones
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

function setIndicatorNext(indicatorCounter){
    
    
    if(indicatorCounter < carouselIndicators.length && indicatorCounter!=0){
        carouselIndicators[indicatorCounter-1].classList.remove("active-img");
        carouselIndicators[indicatorCounter].classList.add("active-img");
    }else{
        console.log("in hhh")
        carouselIndicators[carouselIndicators.length-1].classList.remove("active-img");
        carouselIndicators[indicatorCounter].classList.add("active-img");
    }

}

function setIndicatorPrev(indicatorCounter){
   
    if(indicatorCounter ===  carouselIndicators.length-1){
        carouselIndicators[carouselIndicators.length-1].classList.add("active-img");
        carouselIndicators[0].classList.remove("active-img");
    }else{
        carouselIndicators[indicatorCounter+1].classList.remove("active-img");
        carouselIndicators[indicatorCounter].classList.add("active-img");
    }
}

function setIndicatorNextv1(indicatorCounter){

    if(indicatorCounter >= carouselIndicators.length-1){
        carouselIndicators[carouselIndicators.length-1].classList.remove("active-img");
        carouselIndicators[0].classList.add("active-img");
        console.log("in 1")
    }else if(indicatorCounter < 0){
        indicatorCounter = carouselIndicators.length-1;
        carouselIndicators[0].classList.remove("active-img");
        carouselIndicators[carouselIndicators.length-1].classList.add("active-img");
        console.log("in 2")
    }else{
        carouselIndicators[indicatorCounter].classList.remove("active-img");
        carouselIndicators[indicatorCounter+1].classList.add("active-img");
        console.log("in 3")
    }
   
}

function setIndicatorPrev1(indicatorCounter){
    if(indicatorCounter <= 0){
        carouselIndicators[carouselIndicators.length-1].classList.add("active-img");
        carouselIndicators[0].classList.remove("active-img");
    }else{
        carouselIndicators[indicatorCounter-1].classList.add("active-img");
        carouselIndicators[indicatorCounter].classList.remove("active-img");
    }
   
}
