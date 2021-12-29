function findAccountById(accounts, id) {
  const account = accounts.find((account) => account.id === id);
    return account
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1 ); 
}

function getTotalNumberOfBorrows(account, books) {
   return books.reduce((acc, book) => book.borrows.filter(borrow => borrow.id == account.id).length +acc,0) 
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows[0].id == account.id) 
  .map((book) => { 
    book.author = findAuthorById(authors, book.authorId)
    return book
  })
 }

function findAuthorById(authors, id) {
   return authors.find((author) => author.id == id)  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};