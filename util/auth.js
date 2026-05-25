import axios from 'axios';
const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
const AUTH_SIGN_UP_API_URL = process.env.EXPO_PUBLIC_FIREBASE_AUTH_SIGN_UP_API_URL;

async function authenticate(mode, email, password) {
  const url = AUTH_SIGN_UP_API_URL + `:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

