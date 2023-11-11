import axios from "axios";
const api = process.env.API_URL;

//Login
export const addOrder = async (data, guest, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/orders/`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Guest-Identifier": guest,
      },
    });
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
//Login
export const addOrderNow = async (data, guest, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/buy-now`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Guest-Identifier": guest,
      },
    });
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

export const addToCart = async (data) => {
  try {
    const res = await axios.post(`${api}/carts`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
