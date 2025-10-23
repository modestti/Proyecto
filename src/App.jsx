import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <CartProvider>
            <div>
              <Header />
              <main className='main-content'>
                <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path="detail/:id" element={<ItemDetailContainer />} />
                  <Route path='category/:categoryId' element={<ItemListContainer />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </div>
      </Router>
    </>
  )
}

export default App
