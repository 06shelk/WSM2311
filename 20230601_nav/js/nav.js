
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI)
console.log(navListUl)
//.nav-toggle 클릭하면
nav_toggle.onclick = () => {
    //.nav-toggle i 햄버거 메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    
    //.nav-list에 .show menu toggle
    navListUl.classList.toggle("show-menu");
}

