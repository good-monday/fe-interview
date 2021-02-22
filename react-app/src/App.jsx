import { ReactComponent as PlusIcon } from './assets/icons/plus_icon.svg'
import { ReactComponent as CartIcon } from './assets/icons/cart_icon.svg'
import { ReactComponent as BinIcon } from './assets/icons/bin_icon.svg'
import books from './data/books'

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <a href='/' className='logo'>
          book<span>shelf</span>
        </a>
        <button className='cart-trigger'>
          <span>Cart</span>
          <CartIcon />
        </button>
        <div className='cart'></div>
      </header>

      <main>
        <h1>Books</h1>
        <div className='grid'>
          {books.map((book, index) => (
            <div className='grid-item' key={index}>
              <div className='image-wrap'>
                <button className='add-btn'>
                  <PlusIcon />
                </button>
                <img className='image' src={`${process.env.PUBLIC_URL}/images/${book.id}.jpg`} alt='' />
                <p>{book.price}</p>
              </div>
              <h3>{book.title}</h3>
              <p>by - {book.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
