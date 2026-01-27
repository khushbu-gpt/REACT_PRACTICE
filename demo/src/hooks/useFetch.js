import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(url).then(res => setData(res.data));
  }, [url]);

  return data;
};

export default useFetch
