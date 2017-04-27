export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateUser = (user) => {
  
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.get('user[id]')}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: user
  });
};

// export const updateUser = (user) => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/users/${user.id}`,
//     data: {user}
//   });
// };
