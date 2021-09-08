export const fetchUserData = () =>
  new Promise((res) => setTimeout(() => res({ name: "Huy" }), 2000));
