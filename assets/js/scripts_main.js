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

document.addEventListener('DOMContentLoaded', (event) => {
    //When Document is loaded it starts the script
    const display_quote = document.getElementById('quote')
    document.querySelector('#submit_text').onclick = function()
    {
        let submitted_text = document.querySelector('#input').value;

        if(submitted_text == "")
        {
            display_quote.textContent = "Please provide a text before trying to submit anything.";
        }
        else{
            display_quote.textContent = submitted_text;
        }   
    }

    }
)