/*
  build query params helper function
  example:
  const queryParams = buildQueryParams({
    q: query,
  });
*/
export const buildQueryParams = (data) => {
  return Object.entries(data)
    .map(([key, value]) => {
      let finalValue = value;
      if (Array.isArray(value)) {
        finalValue = value.join(',');
      }

      return `${key}=${encodeURI(finalValue)}`;
    })
    .join('&');
};
