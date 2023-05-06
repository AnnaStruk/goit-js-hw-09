export function createMarkupDetailedCard(countries) {
    return countries
      .map(
        ({
          flags,
          name,
          capital,
          population,
          languages,
        }) => `<li class="countriesItem">
      <div class="flag-country">  
        <img src="${flags.svg}" alt="${name.official}" class="image">
        <h2 class="name">${name.official}</h2>
      </div>
      <p class="capital"> <strong>Capital:</strong> ${capital}</p>
      <p class="population"><strong>Population:</strong> ${population}</p>
      <p class="languages"><strong>Languages:</strong> ${Object.values(languages).join(', ')}</p>
    </li>`
      )
      .join('');
  }
  
  export function createMarkupFlagCard(countries) {
    return countries
      .map(
        ({ flags, name }) => `<li class="countriesItem">
      <div class="flag-country">  
        <img src="${flags.svg}" alt="${name.official}" class="image">
        <h2 class="name">${name.official}</h2>
      </div>
      </li>`
      )
      .join('');
  }
  