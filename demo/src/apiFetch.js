const BASE_URL = "https://api.escuelajs.co/api/v1";

async function fetchWrapper(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const error = {
      status: response.status,
      data: errorData,
    };
    throw error; 
  }

  return response.json();
}

export default fetchWrapper;

