const BASE_URL = process.env.REACT_APP_BASE_URL;
//console.log(BASE_URL)

const handleResponse = async (res) => {
  if (!res.ok) {
    throw new Response('', {
      status: res.status,
      statusText: res.statusText,
    });
    //throw new Error(`Request failed with status ${res.status}`);
  }
  return await res.json();
};

export const getJokesByQuery = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(error);
  }
};

export const getRandomJoke = async () => {
  try {
    const response = await fetch(`${BASE_URL}/random`);
    return await handleResponse(response);
  } catch (error) {
    console.error(error);
  }
};
