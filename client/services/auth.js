import { get, post } from './request.js';

const URL = '/api/v1/users';

export async function signUpUser(credentials) {
  const response = await post(`${URL}/signup`, credentials);
  response.user = response.data;
  return response;
}

export async function signInUser(credentials) {
  const response = await post(`${URL}/`, credentials);
  response.user = response.data;
  return response;
}

export async function verifyUser() {
  const response = await get(`${URL}/me`);
  response.user = response.data;
  return response;
}

const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

export function getLocalUser() {
  const json = localStorage.getItem(USER_KEY);
  try {
    if (json) {
      return JSON.parse(json);
    }
  } catch (e) {
    storeLocalUser();
  }
}
