const country = new URLSearchParams(location.search).get('name');

fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((res) => res.json()
.then((country) => {
    const countryImage = document.querySelector('.country-flag');
    const countryBody = document.querySelector('.country-details');
    countryImage.innerHTML = `<img   src=${country[0].flags.png} alt=""  />`;
    countryBody.innerHTML = `<h2>${country[0].name.official}</h2>
                <p><b>Population: </b>${country[0].population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country[0].region}</p>
                <p><b>Capital: </b>${country[0].capital}</p>
                <p><b>Continent: </b>${country[0].continents[0]}</p>
                <p><b>Currency: </b>${country[0].currencies[Object.keys(country[0].currencies)[0]].name}</p>
                <p><b>Languages: </b>${Object.values(country[0].languages)}</p>
                <p><b>Top Level Domain : </b>${country[0].tld[0]}</p>`;

                console.log(country[0])

    if (country[0].borders) {
         const borderHeader = document.createElement('p');
         borderHeader.innerHTML = `<b>Border Countries: </b>`;
         countryBody.appendChild(borderHeader);
        country[0].borders.forEach(border => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()
                .then(([countries]) => {
              
               const borderCountries = document.createElement('span');
               borderCountries.innerText=countries.name.common+", ";
               countryBody.appendChild(borderCountries);
                }))
        });
    }




}))



