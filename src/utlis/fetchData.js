export const exerciseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74755e45e3msh0191987f75bda21p141831jsn7e620e8b9002",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74755e45e3msh0191987f75bda21p141831jsn7e620e8b9002",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
