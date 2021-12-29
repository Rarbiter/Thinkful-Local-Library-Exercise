function findAuthorById(authors, id) {
   return authors.find((author) => author.id === id)  
}

function findBookById(books, id) {
 return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned == true)
  const notReturned = books.filter ((book) => book.borrows[0].returned == false)
  return [notReturned, returned]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    const account = accounts.find((account) => account.id == borrow.id)
    return {
      ...account, 
      returned: borrow.returned
    }
  }).slice (0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};