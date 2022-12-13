let count =0
let count1=0
let Home_score=document.getElementById("Home_score");
let Guest_score=document.getElementById("Guest_score");
function increaseHomeScoreOne(){
     count +=1
     Home_score.textContent=count
}
function increaseHomeScoreTwo(){
    count +=2
    Home_score.textContent=count
}
function increaseHomeScoreThree(){
    count +=3
    Home_score.textContent=count
}

function increaseGuestScoreOne(){
    count1+=1;
    Guest_score.textContent=count1
}
function increaseGuestScoreTwo(){
    count1+=2;
    Guest_score.textContent=count1
}
function increaseGuestScoreThree(){
    count1+=3;
    Guest_score.textContent=count1
}