import './css/styles.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import debounce from 'lodash.debounce';
// import { fetchCountries } from './js/fetchCountries';
import card from './part/countries-card.hbs';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

// inputEl.addEventListener('input', fetchCountries());
fetchCountries('peru').then(renderCard);

function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/`${name}`').then(
    response => {
      return response.json();
    }
  );
}

function renderCard(countries) {
  const markup = card(countries);

  console.log(markup);
  listEl.innerHTML = markup;
}
