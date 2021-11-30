export const fetchSearchResults = (query) =>
  $.ajax({
    method: "GET",
    url: `/api/searches?query=${query}`,
  });
