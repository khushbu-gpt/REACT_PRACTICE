import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const UserLists = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await api.get("/users");
        console.log(res.data);
      } catch (err) {
        setError(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    const controller = new AbortController();

    api.get("/users", {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div>Loadng...</div>;
  if (error) return console.log(error);
  return <div></div>;
};

export default UserLists;
