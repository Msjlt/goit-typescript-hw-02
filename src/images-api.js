import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (topic, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: { query: topic, per_page: 12, page: currentPage },
    headers: {
      Authorization: "Client-ID XbgnZizeulberydtkbuTJ9ZBYBh-cdHTGhu9Vcm1W6s",
    },
  });
  return response.data.results;
};
