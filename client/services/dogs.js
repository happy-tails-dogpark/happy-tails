import { get, post, } from './request.js';

const URL = 'http://localhost:7890/api/v1/dogs';

export async function getDogs() {
  return await get(URL);
}

export async function createDog(dog) {
  return await post(URL, dog);
}

export async function createDogItem(id, dog) {
  return await post(`${URL}/${id}/dogs`, dog);
}
