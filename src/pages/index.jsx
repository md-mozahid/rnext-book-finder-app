import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Books from '../components/books/Books'

// database book list
import { booksList } from '../db/db'

export default function Index() {
  const [books, setBooks] = useState(booksList)

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

  // handleFavorite
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
  // const handleSort = (val) => {
  //   const bookSort = books.sort(val)
  //   setBooks(bookSort)
  // }

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header onSearch={onSearch} />
        <Books books={books} handleFavorite={handleFavorite} />
      </main>
      <Footer />
    </>
  )
}
