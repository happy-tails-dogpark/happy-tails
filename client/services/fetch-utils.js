/* eslint-disable max-len */
export async function getYelp(filter) {
  console.log('green', filter);
  const rawData = await fetch(`/api/businesses/search?term=dog_parks&location=/?yelpQuery=${filter}`);
  console.log('blue', rawData);
  const data = await rawData.json();
  console.log('brown', data.body);

  return data.body;
}
