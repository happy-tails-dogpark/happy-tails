/* eslint-disable max-len */
export async function getYelp(filter) {
  const rawData = await fetch(`http://localhost:7891/.netlify/functions/dog-endpoint?yelpQuery=${filter}`);
  const data = await rawData.json();

  return data.body;
}
