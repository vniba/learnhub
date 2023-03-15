'use strict';
//callback

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
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

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

/*

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
getCountryAndNeighbor('mexico'); */

// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://restcountries.com/v3.1/name/${country}?fullText=true`
// );

const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status + response.statusText);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  /*   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status + response.statusText);
      }
      return response.json();
    }) */
  getJSON(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error('NO neighbor found');
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(error => renderError(`something went wrong ${error.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};
// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   getCountryData('india');
// });

// Coding challenge #1
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=445064281622076526264x123587`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('problem with geocoding' + response.status);
      }
      return response.json();
    })
    .then(data => {
      getCountryData(data.country);
      // console.log(data.region);
    })
    .catch(error => console.error(error.message));
};

// btn.addEventListener('click', () => {
//   // whereAmI(51.508, 13.381);
//   whereAmI(-33.933, 18.474);
// });
/* console.log('start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);

Promise.resolve('resolved promise 1').then(res => {
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});

Promise.resolve('resolved promise 2').then(res => console.log(res));
console.log('stop'); */

// Promises

const lottery = new Promise(function (resolve, reject) {
  console.log('lottery draw started 🤟');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('you Won 😆');
    } else {
      reject(new Error('You lost 😢'));
    }
  }, 2000);
});
lottery.then(res => console.log(res)).catch(err => console.error(err));

// pomisifying
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('waited for 2 sec');
    return wait(1);
  })
  .then(() => console.log('waited 1 s'));
Promise.resolve('hello check').then(r => console.log(r));
Promise.reject('hello eorr').catch(r => console.log(r));
