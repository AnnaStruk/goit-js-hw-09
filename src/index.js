import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import {fetchCountries} from './js/fetchCountries';
import {createMarkupFlagCard, createMarkupDetailedCard} from './js/markup';

const DEBOUNCE_DELAY = 300;
const searchBoxRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');

searchBoxRef.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));

async function onSearchBoxInput(event) {
    const name = event.target.value.toLowerCase().trim();
    if (!name) {
        countriesListRef.innerHTML = '';
        return;
    }

    try {
        const result = await fetchCountries(name);
        
        if (!result) {
            Notify.failure(
              'Oops, there is no country with that name.');
            countriesListRef.innerHTML = '';
            return;
          }
        if (result.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.');
            countriesListRef.innerHTML = '';
            return;
        }
      
        if (result.length >= 2 && result.length <= 10) {
            countriesListRef.innerHTML = createMarkupFlagCard(result);
            Notify.success(`We found ${result.length} countries`);
            return;
        }
    
        countriesListRef.innerHTML = createMarkupDetailedCard(result);
        
    } catch (error) {
        console.log(error.message);
    }
}

