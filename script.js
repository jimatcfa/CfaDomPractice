let setDark = function(){
    let body = document.querySelector("body");
    body.style.backgroundColor="black";
    let main = document.querySelector("main");
    main.style.backgroundColor = "black";
    main.style.color = "white";
    main.style.borderColor="white";
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "blue";
    let navLinks = document.querySelectorAll("nav>div>a");
    navLinks.forEach(function(lnk){
        lnk.classList.remove("menuLink");
        lnk.classList.add("menuLinkDark");
    });
}

let dmButton = document.querySelector("button#darkMode");
dmButton.addEventListener("click", setDark);