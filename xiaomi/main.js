// swiper
function startSwiper(){
  let swiperImgs = document.getElementsByClassName("swiperimg");
  let swiperIndex = document.getElementsByClassName("swiper-index-wrapper")[0].getElementsByClassName("index")
  let currentIndex = 0;   // 当前图片
  swiperImgs[currentIndex].style.opacity = "1"
  setInterval(()=>{
    currentIndex++;
    if(currentIndex >= 5){
      currentIndex= 0;
    }
    for (let i = 0; i < 5; i++){
      if (i!==currentIndex){
        swiperImgs[i].style.opacity = "0"
        swiperIndex[i].classList.remove("active")
      }else{
        swiperImgs[i].style.opacity = "1"
        swiperIndex[i].classList.add("active")
      }
    }
  },3000)
}
startSwiper()


function showRightBar(){
  let rightBar = document.getElementsByClassName("rightbar-container")[0]
  let width = document.documentElement.clientWidth
  if(width < 1400){
    rightBar.style.display = "none"
  }
  window.onresize = ()=>{
    width = document.documentElement.clientWidth
    if(width < 1400){
      rightBar.style.display = "none"
    }else{
      rightBar.style.display = "block"
    }
  }
}
showRightBar()