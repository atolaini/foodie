export const GET_RECIPES = async (tag: string) => {
  const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  try {
    console.log(tag);
    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
