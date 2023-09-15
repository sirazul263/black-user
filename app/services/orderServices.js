import axios from "axios";
const api = process.env.API_URL;

//Login
export const addOrder = async (data, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/orders/`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Guest-Identifier": "123456",
      },
    });
    console.log(res);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
