import { BASE_URL } from './config';

const getUsersList = () => fetch(`${BASE_URL}/users`);
const getUserPhotos = (id) => fetch(`${BASE_URL}/albums/${id}/photos`);
const getUserPosts = (id) => fetch(`${BASE_URL}/users/${id}/posts`);

export { getUsersList, getUserPhotos, getUserPosts };
