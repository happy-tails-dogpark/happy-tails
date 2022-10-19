/* eslint-disable max-len */
export async function getYelp(filter) {
  const rawData = await fetch(`/api/v1/parks?location=${filter}`);
  const finalData = await rawData.json();
  return finalData;
}
export async function getYelpById(id) {
  const rawData = await fetch(`/api/v1/parks/${id}`);
  const finalData = await rawData.json();
  return finalData;
}
