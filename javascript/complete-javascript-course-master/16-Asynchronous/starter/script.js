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
  });
};
 */
// getCountryData('japan');
const renderError = function (msg) {};

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
    .catch(error => renderError(`something went wrong ${error.message}`));
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

/* const lottery = new Promise(function (resolve, reject) {
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
}; */
/* wait(2)
  .then(() => {
    console.log('waited for 2 sec');
    return wait(1);
  })
  .then(() => console.log('waited 1 s'));
Promise.resolve('hello check').then(r => console.log(r));
Promise.reject('hello error').catch(r => console.log(r)); */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(res => console.log('res :>> ', res));

const whereAmINew = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=445064281622076526264x123587`
      );
    })
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

// btn.addEventListener('click', whereAmINew);

// coding challenge #2
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    resolve(
      fetch(imgPath).then(res => {
        if (!res.ok) {
          throw new Error('failed to load img' + res.status);
        }
        img.src = res.url;
        return document.querySelector('.images').appendChild(img);
      })
    );
    reject('failed to load image');
  });
};

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
// btn.addEventListener('click', () => {
//   createImage('./img/img-3.jpg')
//     .then(res => {
//       wait(2)
//         .then(resp => {
//           res.style.display = 'none';
//           return res;
//         })
//         .then(response => {
//           wait(2).then(res => {
//             createImage('./img/img-2.jpg').then(res => {
//               res.style.display = 'flex';
//               return res;
//             });
//           });
//         });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// another solution 👆
const imgContainer = document.querySelector('.images');
const createImageNew = function (img) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Images not found'));
    });
  });
};
/* let currentImg;
createImage('./img/img-3.jpg')
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-1.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(error => console.log(error));
 */

const getPositionAs = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmIAS = async function () {
  try {
    const { latitude: lat, longitude: lng } = await getPosition();
    const post = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=445064281622076526264x123587`
    );
    if (!post.ok) {
      throw new Error('problem getting data form the server');
    }
    const dataPost = await post.json();
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataPost.standard.countryname}?fullText=true`
    );
    if (!res.ok) {
      throw new Error('problem getting data form the server');
    }
    const data = await res.json();
    countriesContainer.style.opacity = 1;
    renderCountry(data[0]);

    return `you are in ${dataPost.standard.countryname}`;
  } catch (error) {
    console.error(error);

    // reject promise returned form async fn
    throw error;
  }
};
/*
(async function () {
  try {
    const wh = await whereAmIAS();
    console.log(wh);
  } catch (error) {
    console.error(error);
  }
  console.log('finished');
})();
 */
//
const getThreeCountries = async function (c1, c2, c3) {
  try {
    /*    const [data1] = await getJSON(
      `https://restcountries.com/v3.1/name/${c1}?fullText=true`
    );
    const [data2] = await getJSON(
      `https://restcountries.com/v3.1/name/${c2}?fullText=true`
    );
    const [data3] = await getJSON(
      `https://restcountries.com/v3.1/name/${c3}?fullText=true`
    ); */
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}?fullText=true`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}?fullText=true`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}?fullText=true`),
    ]);
    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);
    console.log(data);
    console.log(
      data.map(d => {
        return d[0].capital;
      })
    );
  } catch (error) {
    console.error(error);
  }
};
// getThreeCountries('mali', 'greece', 'australia');

// // Promise.race([])->[]
// (async function () {
//   const response = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/bolivia?fullText=true`),
//     getJSON(`https://restcountries.com/v3.1/name/pakistan?fullText=true`),
//     getJSON(`https://restcountries.com/v3.1/name/peru?fullText=true`),
//   ]);
//   // console.log(response);
// })();

const timeout = function (ms) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('request denied'));
    }, ms);
  });
};
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/peru?fullText=true`),
//   timeout(1000),
// ])
//   .then(res => console.log(res))
//   .catch(er => console.error(er));

// Promise.allSettled()
/* Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('reject'),
  Promise.resolve('success 2'),
]).then(res => console.log(res)); */

// Promise.any()
/* Promise.any([
  Promise.reject('reject'),
  Promise.resolve('success 2'),
  Promise.resolve('success 3'),
])
  .then(res => console.log(res))
  .catch(er => console.error(er)); */

//coding challenge #3
/* const imgContainer = document.querySelector('.images');
const createImageNew = function (img) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Images not found'));
    });
  });
}; */

/*  let currentImg;
 createImage('./img/img-3.jpg')
   .then(img => {
     currentImg = img;
     return wait(2);
   })
   .then(() => {
     currentImg.style.display = 'none';
     return createImage('./img/img-1.jpg');
   })
   .then(img => {
     currentImg = img;
     return wait(2);
   })
   .then(() => {
     currentImg.style.display = 'none';
   })
   .catch(error => console.log(error)); */
/* const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    await wait(2);
    img = await createImage('./img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
loadNPause(); */

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgPath => await createImage(imgPath));
    const success = await Promise.all(imgs);
    success.map(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', 'img/img-3.jpg']);
