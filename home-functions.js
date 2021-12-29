function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned == false).length
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    if (acc[book.genre]){
      acc[book.genre].count ++ 
    }
    else {
     acc [book.genre] = {
       name: book.genre, 
       count: 1
     }
    }
    return acc
  }, { } )   
  const result = []
  for (let genre in genres){
   result.push (genres[genre]) 
  }
    return result.sort ((a, b) => b.count - a.count).slice (0,5)
}

function getMostPopularBooks(books) {
    const names = books.reduce((acc, book) => {
    if (acc[book.title]){
      acc[book.title].count += book.borrows.length 
    }
    else {
     acc [book.title] = {
       name: book.title, 
       count: book.borrows.length
     }
    }
    return acc
  }, { } )   
  const result = []
  for (let name in names){
   result.push (names[name]) 
  }
    return result.sort ((a, b) => b.count - a.count).slice (0,5)
}

function getMostPopularAuthors(books, authors) {
  const names = books.reduce ((acc, book) => {
    const author = findAuthorById (authors, book.authorId)
    const name = author.name.first + " " + author.name.last 
    if (acc[name]){
      acc[name].count += book.borrows.length
    }
    else {
      acc [name] = { 
        name: name,
        count: book.borrows.length
      }
    }
    return acc
  }, { } )
  const result = []
  for (let name in names) {
    result.push (names[name])
  }
  return result.sort ((a, b) => b.count - a.count).slice (0,5)
}


function findAuthorById(authors, id) {
   return authors.find((author) => author.id === id)  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};