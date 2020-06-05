// TODO: Add API method to retrieve contacts
export const getContacts = async (contacts) => {
  const resp = await window.fetch("https://randomuser.me/api/");
  return resp.json;
};
console.log(getContacts);
