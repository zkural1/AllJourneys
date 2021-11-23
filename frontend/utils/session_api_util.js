/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
export const postUser = (user) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });
export const postSession = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const deleteSession = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE",
  });
