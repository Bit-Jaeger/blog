const themes = ["./assets/css/styles_main.css", "./assets/css/styles_main_retro.css"];
let theme_count = 0;


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
