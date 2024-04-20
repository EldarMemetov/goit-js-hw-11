const BASE_URL = 'https://pixabay.com/api';
const KEY = '43475278-2a58784aecd56e70c750f20e8';

export async function searchFormImg(search) {
  const response = await fetch(
    `${BASE_URL}/?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) {
    throw new Error(res.statusText);
  }
  const data = await response.json();
  return data.hits;
}
