console.log(books[3].img);

//HTML->js
//.book-item > img 를 가져오자
const bookItems = document.getElementsByClassName("book-item"); //.book-item 덩어리 가져오자
let i = 0;
for (let bookItem of bookItems) { //.book-item 하나씩 꺼내자
    const bookItemImg = bookItem.getElementsByTagName("img")[0]; //.book-item > 0 하나씩 꺼내자
    bookItemImg.src = books[i].img; //거기에 data.js에서 데이터 가져와 넣기
    i++;
}


// const bookItems = document.getElementsByClassName("book-item");
// console.log(bookItems);
// bookItem = bookItems[0];
// const bookItemImg = bookItem.getElementsByTagName("img")[0];
// console.log(bookItemImg);
// bookItemImg.src = books[3].img;
// bookItemImg.src = books[3].["img"];
