import axios from "axios";
const api = process.env.API_URL;

//Login
export const getCategories = async (setLoading) => {
  console.log(api);
  setLoading(true);
  try {
    const res = await axios.get(`${api}/categories`);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

//Login
export const getSubCategories = async (token) => {
  try {
    const res = await axios.get(`${api}/subcategories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
