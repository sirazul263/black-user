import axios from "axios";
const api = process.env.API_URL;

export const getProducts = async (setLoading, Id, text) => {
  setLoading(true);
  const url = Id
    ? `${api}/products?category_id=${Id}`
    : text
    ? `${api}/products/?search=${text}`
    : `${api}/products`;
  try {
    const res = await axios.get(url);
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

export const getBanners = async (setLoading) => {
  setLoading(true);
  const url = `${api}/slider-images`;
  try {
    const res = await axios.get(url);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
