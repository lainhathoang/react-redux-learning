import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8ZF6hw3bnjfFtdzRycCwgRxZMwW6T_yeY8GELxij16c",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
