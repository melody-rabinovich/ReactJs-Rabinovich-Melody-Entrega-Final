import './App.css'
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartView } from './components/Cart/CartView.jsx';
import { ProductSuccess } from './components/adminComponent/ProductSuccess.jsx';
import { ProductFormContainer } from './components/adminComponent/ProductFormContainer.jsx';

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} /> 
        <Route path="/product/:id" element={<ItemDetailContainer/>} /> 
        <Route path="/carrito" element ={<CartView />} />
        <Route path="/admin" element ={<ProductFormContainer />} />
        <Route path="/success/:id" element={<ProductSuccess />} />
        
      </Routes>
    </main>
    <Footer />
    
    </>
  )
}

export default App
