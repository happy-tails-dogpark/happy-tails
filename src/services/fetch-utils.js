/* eslint-disable max-len */
export async function getYelp(filter) {
  console.log('green', filter);
  const rawData = await fetch(`http://localhost:7891/.netlify/functions/dog-endpoint?yelpQuery=${filter}`);
  console.log('blue', rawData);
  const data = await rawData.json();

  return data.body;
}
