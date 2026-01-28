import { useState } from "react";
import fetchWithAuth from "./apiFetch";

export function useFetchAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, options) => {
    setLoading(true);
    setError(null);
    try {
      return await fetchWithAuth(url, options);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}
