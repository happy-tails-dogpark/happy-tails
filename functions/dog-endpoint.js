/* eslint-disable max-len */
const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  try {
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=dog_parks&location=${event.queryStringParameters.yelpQuery}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      }
    });
    const data = await response.json();
    const json = JSON.stringify(data);

    return {
      statusCode: 200,
      headers,
      body: json,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
