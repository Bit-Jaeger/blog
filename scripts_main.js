const themes = ["styles_main.css", "styles_main_retro.css"];
let theme_count = 0;




document.addEventListener('DOMContentLoaded', (event) => {
        
    let dailyScores = 0
    let totalVisitors = 0
    document.querySelector('#add1').onclick = function()
        {
            //adding the buttonclick
            dailyScores++;
            totalVisitors++;

            document.querySelector('#dailyVisitors').textContent = dailyScores;

            document.querySelector('#totalVisitors').textContent = totalVisitors;

            document.querySelector('#add1_Feedback').textContent = "Thanks for participating!";
        }
    }
)


document.addEventListener('DOMContentLoaded', (event) => {
    //changing the font on button change_themes click
    document.querySelector('#change_theme').onclick = function()
        {
            const styles_variable = themes[theme_count % themes.length];
            theme_count++;
            document.getElementById('styles').setAttribute('href', styles_variable);
            console.log("theme variable changed.")
        }
}
)