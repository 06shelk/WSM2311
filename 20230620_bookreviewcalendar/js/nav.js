//.nav-toggle 클릭하면
//.nav-toggle i 햄버거 메뉴 <-> X
//.nav-list에 .show menu toggle

//HTml -> js 
// 1. ID
//const navToggleDiv = document.getElementById("nav-toggle");
// 2. class
//const navToggleDiv = document.getElementsByclassName("nav-toggle")[0];
// 요소가 여러개 s 하나라도 s 임.
// 3. Tag
//const navToggleDiv = document.getElementsByTagName("div")[0];
// 4. css selector
// const navToggleDiv = document.querySelector("#nav-toggle"); 
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];
// 5. Xpath


//nav_toggle.onclick = () => alert("안녕");
//nav_toggle.onclick =  alert("안녕");

/* function sayHello(){
    alert("안녕");
}

nav_toggle.onclick = function(){
    alert("안녕");
};
 */
//" 안녕이라는 창을 띄우는 함수를 실행해라"
// sayHello();
// nav_toggle.onclick = sayHello;

// nav_toggle.onclick = () =>{
// alert("안녕");
// };
//nav_toggle.onclick = sayHello;

//nav_toggle.onclick = () => alert("안녕");

//
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

