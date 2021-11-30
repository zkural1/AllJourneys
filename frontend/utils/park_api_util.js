export const fetchPark = (parkId) =>
  $.ajax({
    method: "GET",
    url: `/api/parks/${parkId}`,
  });
