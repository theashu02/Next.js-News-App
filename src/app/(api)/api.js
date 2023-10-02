import React from "react";

const api = async (topic) => {
  console.log(topic);

  const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${topic}&freshness=Day&textFormat=Raw&safeSearch=Off`;
  const options = {
    method: "GET",

    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "bb93bfd482msh9fc84d518a5d08ep1c71ccjsna525c9ae519b",
      // "X-RapidAPI-Key": process.env.APP_KEY,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

};

export default api;
