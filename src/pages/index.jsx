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
    const searchFiltered = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchValue.toLowerCase())
    )

    setBooks([...searchFiltered])
  }

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header onSearch={onSearch} />
        <Books books={books} />
      </main>
      <Footer />
    </>
  )
}
