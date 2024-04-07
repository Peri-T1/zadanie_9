// Service.forEach(function(item, idx){
//     var block = document.createElement("div");
//     block.innerText = item + idx;
//     block.classList.add("service1");
//     block.setAttribute("src, item.icon")
//     if (idx == 2) {
//         block.classList.add("redCard");
//     }
//     wrapper.append(block);
// });
var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose");
  

mobileMenu.addEventListener("click", function () {
    // var menu = document.createElement("div");
    // menu.innerText = "text"
    // mobileMenuOpened.append(menu);
    // mobileMenuOpened.classList.contains("visible")
    // mobileMenuOpened.classList.add("visible");
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
    
});

mobileMenuClose.addEventListener("click", function(){
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
})