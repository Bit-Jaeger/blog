

document.addEventListener('DOMContentLoaded', (event) => {
        
    let dailyScores = 0
    let totalVisitors = 0
    document.querySelector('#add1').onclick = function(){
        //adding the buttonclick
        dailyScores++;
        totalVisitors++;

        document.querySelector('#dailyVisitors').textContent = dailyScores;

        document.querySelector('#totalVisitors').textContent = totalVisitors;

        document.querySelector('#add1_Feedback').textContent = "Thanks for participating!";
    }


    document.querySelector('#dailyVisitors')
}