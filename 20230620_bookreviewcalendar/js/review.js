// URL에 있는 book parameter 값(String) -> String을 int로 변환 -> -1 -> books의 인덱스로 변환(int)

//URL에 있는 book parameter 값 (string)
let url_href = window.location.href; // 브라우저 창에 있는 주소
const bookId = new URL(url_href).searchParams.get("book"); 
console.log(`bookId: ${bookId}, type: ${typeof bookId}`);
// -> string 을 number로 변환: bookIdNumber
//let bookIdNumber= Number(bookId); // string -> number
let bookIdNumber = parseInt(bookId); // string -> number
//let bookIdNumber = bookId * 1; // string -> number
//let bookIdNumber = bookId + 0; // string -> number

console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`);

//books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
//bookIdNumber: URL에서 가져온 id 값
//bookIdNumber: URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for(let book of books) {
    if(bookIdNumber === book.id) { // == 값을 비교, === 타입까지 비교
        bookData = book;    //id가 같으면, 그 놈을 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);

// -> title, author, publisher, bookImage 알아내자
let title = bookData.title;
//let title = bookData["title"];
console.log(title);

let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.bookImage;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자



// 현재 페이지의 URL에서 쿼리 파라미터를 가져옵니다.
let url = new URL(location.href).searchParams;

// "book" 파라미터의 값을 가져옵니다.
let book = url.get("book");

// 콘솔에 book 값을 출력합니다.
console.log(book);
 
// searchParams는 URL 객체의 프로퍼티로, 주소 뒤에 오는 쿼리 문자열(query string)을 다루기 위한 API입니다. 
// 쿼리 문자열은 URL 뒤에 ? 문자로 시작하며, key=value 형식으로 파라미터를 나타내는 것을 말합니다.

const bookTitle = books[0].title;
console.log(`bookTitle: ${bookTitle}`)