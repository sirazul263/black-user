import axios from "axios";
const api = process.env.API_URL;

export const getProducts = async (setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/products/`);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

export const getSingleProduct = async (Id, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/products/${Id}`);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
