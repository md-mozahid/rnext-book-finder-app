import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Books from '../components/books/Books'
import { booksList } from '../db/db'

export default function Index() {
  const [books, setBooks] = useState(booksList)

  // search book
  const onSearch = (searchValue) => {
    if (searchValue === '') {
      setBooks([...books])
    } else {
      const searchFiltered = books.filter((book) =>
        book.bookName.toLowerCase().includes(searchValue.toLowerCase())
      )
      setBooks([...searchFiltered])
    }
  }

  // handle Favorite
  const handleFavorite = (id) => {
    const isFab = books.map((book) => {
      if (book.id === id) {
        return { ...book, favorite: !book.favorite }
      } else {
        return book
      }
    })

    setBooks(isFab)
  }

  // sort books
  const handleSortBooks = (val) => {
    // console.log(val)
    const sortBooks = books.sort((a, b) => a.val > b.val ? 1 : -1)
    setBooks(sortBooks);
  }

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header onSearch={onSearch} handleSortBooks={handleSortBooks} />
        <Books books={books} handleFavorite={handleFavorite} />
      </main>
      <Footer />
    </>
  );
}
