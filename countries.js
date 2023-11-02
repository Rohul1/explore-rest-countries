const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
}



const displayCountries = countries => {

// for (const country of countries){
//     console.log(country);
// }

const conuntriesContainer = document.getElementById("countries-container");

countries.forEach(country => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    // console.log(country);
    countryDiv.innerHTML = `
    <h3> Name : ${country.name.common} </h3>
    <p>Capital :${country.capital ? country.capital[0] : "no capital"}  </p>
    <button onclick="loadCountryDetails('${country.cca2}')">Detail</button>
    `;
    conuntriesContainer.appendChild(countryDiv);
});

    
}
loadCountries();


const loadCountryDetails = code => {
    
// https://restcountries.com/v3.1/alpha/{code}
const url = `https://restcountries.com/v3.1/alpha/${code}`

    // console.log("get country details", code);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    console.log(country);
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
    <h2> Details : ${country.name.common}</h3>
    <img src ="${country.flags.png}"></img>

    `

}
