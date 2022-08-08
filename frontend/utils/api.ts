const fetchApi = async <T = unknown> (url: string) : Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
};

const fetchApiByPath = async <T = unknown> (path: string) : Promise<T> => {
  return fetchApi<T>(`http://localhost:1337/api/${path}`);
}

const API_PATHS = {
  HOMEPAGE: 'homepage',
  POSTS: 'posts',
  CATEGORIES: 'categories'
} 

export {fetchApi, fetchApiByPath, API_PATHS}