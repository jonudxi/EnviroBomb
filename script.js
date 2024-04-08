let mobileMenuTrigger= document.getElementById("myBurger")
mobileMenuTrigger.addEventListener("click",showMobileMenu)
function showMobileMenu(){
    let mobileMenuTarget= document.getElementById("mobile-nav-target")
  mobileMenuTarget.classList.add("show")
}
