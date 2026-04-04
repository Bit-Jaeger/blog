


let dailyVisitors = 0
let totalVisitors = 0
document.querySelector('#add1').onclick = function(){
    dailyVisitors = dailyVisitors + 1;
    document.querySelector('dailyVisitors').innerHTML = dailyVisitors
    document.querySelector('#add1_feedback').innerHTML = "Thanks for participating!"
}
document.querySelector('#dailyVisitors')