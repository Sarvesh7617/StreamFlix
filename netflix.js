const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".Left-menu")


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


// Playsinline code

document.addEventListener("DOMContentLoaded",(event)=>{
    const video=document.getElementById("homeVideo")
    if (video && video.play)
    {
     video.play()
     video.setAttribute('webkit-playsinline', 'webkit-playsinline')
     video.setAttribute('playsinline','playsinline')
    }
});