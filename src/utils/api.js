const BASE_URL = process.env.REACT_APP_BASE_URL;
//console.log(BASE_URL)

const handleResponse = async (res) => {
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(`Request failed with status ${res.status}`);
  }
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
