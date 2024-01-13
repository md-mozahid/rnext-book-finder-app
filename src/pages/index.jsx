import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Books from '../components/books/Books'

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header />
        <Books />
      </main>
      <Footer />
    </>
  )
}
