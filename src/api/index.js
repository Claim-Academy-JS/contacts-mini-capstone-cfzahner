export const getContacts = async (numOfResults = 12) => {
  const res = await fetch(`https://randomuser.me/api/?results=${numOfResults}`);
  return res.json();
};
