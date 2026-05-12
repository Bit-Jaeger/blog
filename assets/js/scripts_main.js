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
    const display_quote = document.getElementById('quote')
    //When Document is loaded it starts the script

    //getting the data to objects for js
    fetch('/assets/json/quotes.json')
        .then(response => {
            console.log("The data got fetched")
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayRandomQuote(data);
        })




    function displayRandomQuote(data){
        const quoteCount = data.length;
        const randomIndex = Math.floor(Math.random() * quoteCount);
        const randomQuote = data[randomIndex].quote;
        const randomQuoteAuthor = data[randomIndex].author;


        display_quote.textContent = randomQuote + '—' + randomQuoteAuthor;

    }
)