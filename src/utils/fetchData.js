export const exerciseOptions = {
    method: 'GET',
    headers: {
      // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '2e7d15c4cbmsh27d60c288c2a928p133279jsn8c9eefc48dc1',
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e7d15c4cbmsh27d60c288c2a928p133279jsn8c9eefc48dc1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}