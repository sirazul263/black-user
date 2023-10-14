import axios from "axios";
const api = process.env.API_URL;

//Login
export const getOffers = async (setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/offers/`);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

export const getNews = async () => {
  try {
    const res = await axios.get(`${api}/news`);
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
