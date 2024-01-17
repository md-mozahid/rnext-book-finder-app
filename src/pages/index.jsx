import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Books from '../components/books/Books'
import { booksList } from '../db/db'

export default function Index() {
  const [allBooks] = useState(booksList)
  const [books, setBooks] = useState(booksList)

  // search book
  const onSearch = (searchValue) => {
    if (searchValue === '') {
      setBooks(allBooks)
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
  const handleSortBooks = (value) => {
    // console.log(value)
    const [type, order] = value.split('_')
    // console.log(type, order)
    if (type === 'name') {
      // console.log(type)
      const sorting = [...books].sort((a, b) =>
        order === 'desc'
          ? b.bookName.localeCompare(a.bookName)
          : a.bookName.localeCompare(b.bookName)
      )
      console.log(sorting)
      setBooks(sorting)
    }
    if (type === 'year') {
      // console.log(type)
      const sorting = [...books].sort((a, b) =>
        order === 'desc' ? b.publish - a.publish : a.publish - b.publish
      )
      // console.log(sorting)
      setBooks(sorting)
    }
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
  )
}
