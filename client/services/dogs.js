import { get, post, } from './request.js';

const URL = '/api/v1/dogs';

export async function getDogs() {
  return await get(URL);
}

export async function createDog(dog) {
  return await post(URL, dog);
}

export async function createDogItem(id, dog) {
  return await post(`${URL}/${id}`, dog);
}

export async function onAdd(profile) {
  return await post(`${URL}/profile`, profile);
}
