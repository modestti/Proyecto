import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'

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
                  <Route path="/shopping-card" element={<Cart />} />
                  <Route path="/admin" element={<ProductFormContainer/>}/>
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
