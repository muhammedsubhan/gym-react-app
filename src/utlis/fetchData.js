export const exerciseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b4c30856fmshd052984e1f36c38p15f87fjsn5cdc7c80721e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
