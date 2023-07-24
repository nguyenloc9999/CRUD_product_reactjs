import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import { IProduct } from './types/product'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data)) 
  }, [])
  const onHandleRemove = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
    alert('Bạn đã xóa thành công')
    }
    else {
      alert('Bạn không thể xóa')
    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct)=> {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
