


let dailyVisitors = 0
let totalVisitors = 0
document.querySelector('#add1').onclick = function(){

    dailyVisitors++;
    totalVisitors++;

    document.querySelector('#dailyVisitors').innerHTML = dailyVisitors;
    document.querySelector('#totalVisitors').innerHTML = totalVisitors;
    document.querySelector('#add1_Feedback').innerHTML = "Thanks for participating!";
}


document.querySelector('#dailyVisitors')