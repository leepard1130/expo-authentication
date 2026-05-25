import axios from 'axios';
const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
const AUTH_SIGN_UP_API_URL = process.env.EXPO_PUBLIC_FIREBASE_AUTH_SIGN_UP_API_URL;


async function createUser(email, password) {
  const response = await axios.post(AUTH_SIGN_UP_API_URL+API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}

export default createUser;

