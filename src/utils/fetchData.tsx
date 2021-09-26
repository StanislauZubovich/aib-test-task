//fetchData works a bit tricky for get Coin, need to combile baseUrl with coinId
export const fetchData = async (BASE_URL) => {
  const res = await fetch(BASE_URL);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error('Failed request');
};