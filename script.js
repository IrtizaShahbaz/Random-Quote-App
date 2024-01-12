const apiUrl = "https://type.fit/api/quotes"
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(Url){
    const response = await fetch (Url);
    var data = await response.json();
    let randIdx = Math.floor(Math.random() * 15);
    let txt = data[randIdx]; 
    quote.innerHTML = txt.text;
    author.innerHTML = txt.author.replace(", type.fit", "");;  
}
getQuote(apiUrl);
