{
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    "age": 25,
    "company": "ZILLACON",
    "email": "esther.tucker@zillacon.me",
    "registered": "Thursday, May 28, 2015 2:51 PM"
  }

function findAccountByID (accounts, id) {
    const account = accounts.find((account) => account.id === id);
    return account
}