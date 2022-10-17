/* eslint-disable max-len */
const fetch = require('node-fetch');

module.exports = { getYelp };
async function getYelp(location) {
  const rawData = await fetch(`https://api.yelp.com/v3/businesses/search?term=dog_parks&location=${location}`,
    { headers: {
      Authorization: `Bearer ${process.env.YELP_KEY}`,
    } });
  const data = await rawData.json();
  
  return data.businesses;
}
