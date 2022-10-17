/* eslint-disable max-len */
export async function getYelp(filter) {
  const rawData = await fetch(`/api/v1/parks?location=${filter}`);
  // console.log('grape', await rawData.text());
  const finalData = await rawData.json();
  return finalData;
}
