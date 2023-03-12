
const barsInfoContainer = document.querySelectorAll('.day-info');
const dayB = document.querySelectorAll(".day-bar");
const dayT = document.querySelectorAll(".day-text");
const amount = document.querySelectorAll(".amount-value");
const amountBox = document.querySelectorAll(".amount");
const barsCont = document.querySelector(".bars-container");


//Getting the current day and painting it blue
let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
let date = new Date(); //current day
let dayNum = date.getDay(); //returns number of weeks
let currentDay = days[dayNum];
let currentDayBar = barsInfoContainer[dayNum - 1].childNodes[3]; //getting the current bar
//turning the currentDayBar blue (3 indicates the bar)
currentDayBar.style.backgroundColor = 'hsl(186, 34%, 60%)';

//fetching data and showing amounts:
getData();


//showing amounts when touching a bar:
barsCont.addEventListener('mouseover', e =>{
    
   if (e.target.classList.value === 'day-bar'){
      if (e.target.id === 'mon'){
        amount[0].style.visibility = 'visible';
        amountBox[0].style.visibility = 'visible';
      } else if (e.target.id === 'tue'){
                amount[1].style.visibility = 'visible';
                amountBox[1].style.visibility = 'visible';
        } else if (e.target.id === 'wed'){
                amount[2].style.visibility = 'visible';
                amountBox[2].style.visibility = 'visible';
            } else if (e.target.id === 'thu') {
                    amount[3].style.visibility = 'visible';
                    amountBox[3].style.visibility = 'visible';
                } else if (e.target.id === 'fri'){
                        amount[4].style.visibility = 'visible';
                        amountBox[4].style.visibility = 'visible';
                    } else if (e.target.id === 'sat') {
                            amount[5].style.visibility = 'visible';
                            amountBox[5].style.visibility = 'visible';
                        } else if (e.target.id === 'sun'){
                                amount[6].style.visibility = 'visible';
                                amountBox[6].style.visibility = 'visible';
                            }   
   }
});

//hidding amounts when the mouse is no longer over the bar:
barsCont.addEventListener('mouseout', e => {
    if (e.target.classList.value === 'day-bar'){
        if (e.target.id === 'mon'){
          amount[0].style.visibility = 'hidden';
          amountBox[0].style.visibility = 'hidden';
        } else if (e.target.id === 'tue'){
                  amount[1].style.visibility = 'hidden';
                  amountBox[1].style.visibility = 'hidden';
          } else if (e.target.id === 'wed'){
                  amount[2].style.visibility = 'hidden';
                  amountBox[2].style.visibility = 'hidden';
              } else if (e.target.id === 'thu') {
                      amount[3].style.visibility = 'hidden';
                      amountBox[3].style.visibility = 'hidden';
                  } else if (e.target.id === 'fri'){
                          amount[4].style.visibility = 'hidden';
                          amountBox[4].style.visibility = 'hidden';
                      } else if (e.target.id === 'sat') {
                              amount[5].style.visibility = 'hidden';
                              amountBox[5].style.visibility = 'hidden';
                          } else if (e.target.id === 'sun'){
                                  amount[6].style.visibility = 'hidden';
                                  amountBox[6].style.visibility = 'hidden';
                              }   
     }
});



//function to fetch info from data.json:
async function getData(){

    let amounts = []; //to store amounts
    let response = await fetch("/data.json");
    let data = await response.json();
    for(let i = 0; i < data.length; i++){
        amounts[i] = data[i].amount; //storing amounts
    }

    let index = 0;
    data.forEach((item) => {
        if (item.day === dayT[index].textContent){
            let height = (amounts[index]*2.5);
            dayB[index].style.height = `${height}px`; //establish the height of the bars
            amount[index].innerHTML = `${amounts[index]}`; //establish the text of the amount
        }
        index++;
    });
    
}

