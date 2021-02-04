// swiper
function startSwiper(){
  let swiperImgs = document.getElementsByClassName("swiperimg");
  let swiperIndex = document.getElementsByClassName("swiper-index-wrapper")[0].getElementsByClassName("index")
  let currentIndex = 0;
  swiperImgs[currentIndex].style.opacity = 1
  setInterval(()=>{
    currentIndex++;
    if(currentIndex>=5){
      currentIndex = 0
    }
    for (let i =0; i<5;i++){
      if(i!==currentIndex){
        swiperImgs[i].style.opacity = "0"
        swiperIndex[i].classList.remove("active")
      }else{
        swiperImgs[i].style.opacity = "1"
        swiperIndex[i].classList.add("active")
      }
    }
  }, 3000)
}
startSwiper()