const options = { method: "GET", headers: { accept: "application/json" } };

export const getMarketCode = async () => {
  const data = fetch(
    "https://api.bithumb.com/v1/market/all?isDetails=false",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return data;
};
