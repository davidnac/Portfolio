/*
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

*/

function createimagesForSlide(imagesArray, type) {
    for(var i=0; i<imagesArray.length; i++){
     var img = document.createElement('img');
     img.classList.add("mySlides");
     if(type === 'web'){
       img.classList.add("desktopImage");
     }
     
     img.src = imagesArray[i];

     document.querySelector('.auto-slide-display-container').appendChild(img);
    } 

    showDivs(slideIndex);
    carousel();
 }


/*-------------------------another version---------------------------------*/


//regular slide
var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


//auto slide
var slideIndex = 0;
var timeout;
const pauseBtn = document.querySelector('.w3-display-pause');
var isPaused = false;

//carousel();

const container = document.querySelector(".auto-slide-display-container");
container.addEventListener("mouseover", function(){
    console.log("mouse over")
    clearTimeout(timeout);
});

container.addEventListener("mouseleave", function(){
    console.log("mouse out")
    carousel();
});



pauseBtn.addEventListener("click", function(){
    console.log("pause clicked")
    if(isPaused){
        isPaused = false;
        carousel();
        pauseBtn.innerHTML = "<i class='far fa-pause-circle'></i>";
    }else{
        isPaused = true;
        clearTimeout(timeout);
        pauseBtn.innerHTML = "<i class='far fa-play-circle'></i>";
    }
});

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  timeout = setTimeout(carousel, 2700); // Change image every 2 seconds
}

function clearAutoSlideStack(){
    slideIndex = 0;
    pauseBtn.innerHTML = "<i class='far fa-pause-circle'></i>";
    if(timeout !== undefined){
        clearTimeout(timeout);
    }
}



