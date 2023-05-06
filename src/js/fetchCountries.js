const BASE_URL = 'https://restcountries.com/v3.1';
const filters = 'name,capital,population,flags,languages';
export async function fetchCountries(name) {
    try { 
        const result = await fetch (
            `${BASE_URL}/name/${name}?fields=${filters}`
        );
        if (!result.ok) {
            throw new Error(error);
          }
        return result.json();        
    } catch (error) {
        console.log(error.message);
    }
}