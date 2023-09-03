export const GET_RECIPES = async (tag: string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`;

  const API_KEY = process.env.API_KEY || '';

  const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  };

  try {
    const res = await fetch(url, {
      headers: headers,
    });
    const data = await res.json();

    console.log(data);

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
