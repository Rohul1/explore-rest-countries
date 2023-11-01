const loadQuote = ()=>{
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => displayQuote(data));
    
    }
    
    
    
    
    const displayQuote = quote =>{
    
    const blockQoute = document.getElementById("quote");
    console.log(quote);
    blockQoute.innerText = quote.quote;
    
    
    } 