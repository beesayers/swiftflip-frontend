const getApiUrl = (apiRoute: string): string => {
  const HOST = process.env.HOST ?? "http://localhost:8000";
  return `${HOST}/api/${apiRoute}`;
};

const makeApiRequest = async (apiRoute: string, method: string, data: object): Promise<any> => {
  const apiUrl = getApiUrl(apiRoute);
  const response = await fetch(apiUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export default makeApiRequest;
