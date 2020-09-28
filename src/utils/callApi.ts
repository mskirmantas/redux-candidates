export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: any
) {
  const response = await fetch(`${url}/api${path}`, {
    method,
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
  return result;
}
