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
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route path='/' element={<ItemListContainer /> } />
              <Route path="detail/:id" element={<ItemDetailContainer />} />
              <Route path='category/:categoryId' element={<ItemListContainer />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
