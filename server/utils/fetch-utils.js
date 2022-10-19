/* eslint-disable max-len */
const fetch = require('node-fetch');

module.exports = { getYelp, getYelpById };
async function getYelp(location) {
  const rawData = await fetch(`https://api.yelp.com/v3/businesses/search?term=dog_parks&location=${location}`,
    { headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`,
    } });
  const data = await rawData.json();
  
  return data.businesses;
}
async function getYelpById(id) {
  const rawData = await fetch(`https://api.yelp.com/v3/businesses/${id}`,
    { headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`,
    } });
  const data = await rawData.json();
  console.log('data-fetch', data);
  return data;
}
