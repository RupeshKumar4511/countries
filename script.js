const container = document.querySelector('.container');
container.innerHTML = '';
fetch('https://restcountries.com/v3.1/all').then((res) => res.json()
    .then(data => data.forEach((country) => {
        countryCards(country);
        
    })));



document.querySelector('#filter').addEventListener('change', (event) => {

    let url = '';
    if (event.target.value == 'all') {
        url = `https://restcountries.com/v3.1/all`;
    } else {
        url = `https://restcountries.com/v3.1/region/${event.target.value}`
    }


    const container = document.querySelector('.container');
    container.innerHTML = '';

    fetch(url).then((res) => res.json()
        .then(data => data.forEach((country) => {

            console.log(country)
            countryCards(country)
        })));
})

function countryCards(country) {
    const cardContainer = document.createElement('a');
    const cardImage = document.createElement('div');
    const cardBody = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardImage.classList.add('card-image');
    cardBody.classList.add('card-body');
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
    cardImage.innerHTML = `<img  class="image"  src=${country.flags.png} alt=""  />`;
    cardBody.innerHTML = `<h2>${country.name.official}</h2>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>`;

    cardContainer.href = `/country.html?name=${country.name.official}`;

    const container = document.querySelector('.container');
    container.appendChild(cardContainer);

}







const searchBar = document.querySelector("#search");

function findElementsByText(text) {
    let elements = document.querySelectorAll('*');
    return Array.from(elements).filter(el => el.textContent.includes(text));
}

searchBar.addEventListener('change', (e) => {
    e.preventDefault();

    let elements = findElementsByText(searchBar.value);
    if (elements.length > 0) {
        elements.forEach(element => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    } else {
        alert('Word not found!');
    }




});