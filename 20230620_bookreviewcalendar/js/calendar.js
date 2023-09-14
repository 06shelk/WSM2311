// 이번달

// 현재 날짜 / 시각 객체 만들자
var now = new Date();

// 현재 월
var year = now.getFullYear();
// 현재 년
var month = now.getMonth() + 1;

var date = now.getDate();

const datesContainerDiv = document.querySelector(".dates.container")

const setCalendar = (year, month) => {
    // 제목달 보여주자!
    // html -> js
    var titleMonthDiv = document.querySelector('.month');
    titleMonthDiv.innerHTML = `${month}월`;

    // 달력을 만들자
    // 1일의 요일 
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    //해당 월의 마지막 날짜가 며칠?: 다음달의 1일 하루 전날(0일)

    // 달의 마지막 일
    var lastDate = new Date(year, month - 1 + 1, 0).getDate();

    //원래 있던 달력의 .date.item clear
    datesContainerDiv.replaceChildren();

    //.date.item{$}*lastDate
    // for 1 ~ lastDate
    for (let date = 1; date <= lastDate; date++) {
        //<div class = "date item">date</div>
        let dateItemDiv = document.createElement('div'); //<div></div>만드는 과정
        dateItemDiv.classList.add("date"); // <div class= "date"></div>
        dateItemDiv.classList.add("item"); // <div class= "date item"></div>
        dateItemDiv.innerHTML = date;
        //HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    //1일을 firstDateDay로 옮기자
    //.dates.container의 자식 중 첫째자식(1일) style grid-column-start: day + 1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    //CSS {grid-column-start: firstDateDay + 1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;
    
    // 토 : 파랑
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${ 7 - firstDateDay })`);
    for (let dateItem of saturdayDivs) {
        dateItem.style.color = "blue";

    }

    // 토 : 빨강
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${ (7 - firstDateDay + 1)%7})`);
    for (let dateItem of sundayDivs) {
        dateItem.style.color = "red";
        
    }

    // < 이전달
    const leftDiv = document.getElementsByClassName("left")[0];
    //leftDiv.addEventListener("click", () => console.log(`${month}월`));
    leftDiv.onclick = () => {
        month--;

        if (month == 0) {
            year--;
            month = 12;
        }

        // let thisMonthDateObject = new Date(year, month - 1);
        // year = thisMonthDateObject.getFullYear();
        // month = thisMonthDateObject.getMonth() + 1;

        setCalendar(year, month);
    }
    


    // document.querySelector('.left').addEventListener('click', function() {
    //     month--; // 월을 하나 감소
    //     
    

    //현재 달로 돌아가기
    const thisMonthDiv = document.getElementsByClassName("month")[0]
    thisMonthDiv.onclick = () => {

        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1;
        
        setCalendar(year, month);

    }



    // > 이후달
    const rightDiv = document.getElementsByClassName("right")[0];
    rightDiv.onclick = () => {
        month++;

        if (month == 13) {
            year++;
            month = 1;
        }
        setCalendar(year, month);
    }

    console.log(`${month}월`);
}

setCalendar(year, month);
