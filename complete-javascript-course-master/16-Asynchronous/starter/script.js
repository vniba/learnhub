'use strict';
//callback hell

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `   <article class="country">
          <img class="country__img"  alt ="${data.flags.alt} " src="${
      data.flags.svg
    }" />
          <div class="country__data">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} People</p>
            <p class="country__row"><span>🗣️</span>${Object.keys(
              data.languages
            ).at(0)}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            ).map(val => {
              const { name } = val;
              return name;
            })}</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
 */
// getCountryData('japan');

const renderCountry = function (data, className = '') {
  const html = `   <article class="country">
          <img class="country__img"  alt ="${data.flags.alt} " src="${
    data.flags.svg
  }" />
          <div class="country__data ${className}">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} People</p>
            <p class="country__row"><span>🗣️</span>${Object.keys(
              data.languages
            ).at(0)}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            ).map(val => {
              const { name } = val;
              return name;
            })}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // country 1
    renderCountry(data);

    //Get neighbor country
    const neighbor = data.borders?.at(0);
    if (!neighbor) {
      return;
    }

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbor('mexico');
///////////////////////////////////////
