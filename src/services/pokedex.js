
/**
 * Interface with the Pokedex API.
 *
 * Documentation is hosted here: https://pokedex-alchemy.herokuapp.com
 */

// import { fetchOrReject } from './utils.js';

// export const typesGetAll = async () => {
//   const res = await fetchOrReject(process.env.POKEDEX_URL + '/types');
//   return res.json();
// };
 
// export const pokemonGetAll = async (page, formData) => {
//   const query = Array.from(formData.entries())
//     .map(([k, v]) => `${k}=${v}`).join('&')
//      + '&page=' + page;
//   const res = await fetchOrReject(`${process.env.POKEDEX_URL}?${query}`);
//   return res.json();
// };

export const search = async (searchObj) => {
  // TODO: Visit adding to URLSearchParams, append, and toString().
  const query = Array.from(Object.entries(searchObj))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  const res = await fetch(process.env.POKEDEX_URL + '?' + query);
  if (res.status >= 400) {
    throw res;
  } else {
    const body = await res.json();
    console.log('search results', body);
    return body;
  }
};


