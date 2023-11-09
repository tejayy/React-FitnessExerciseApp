export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a71e34a701msh17dc2ee64ab2aa8p1bafd1jsne94c110904c1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};


export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a71e34a701msh17dc2ee64ab2aa8p1bafd1jsne94c110904c1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
