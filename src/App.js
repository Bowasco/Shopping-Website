import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './component/Admin/AddProduct';
import EditPage from './component/Admin/EditPage';
import Signup from './component/Auth/Signup';
import UserProducts from './component/UserProducts';
import AdminPage from './component/Admin/AdminPage';
import Homepage from './component/HomePage';
import ViewMore from './component/ViewMore';
import Cart from './component/Cart';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/admin' element={<AdminPage />}/>
          <Route path='/AddProduct' element={<AddProduct/>}/>
          <Route path= '/EditPage/:id' element={<EditPage />}/>
          <Route path= '/UserProducts' element={<UserProducts />}/>
          <Route path= '/signup' element={<Signup />}/>
          <Route path='viewmore/:id' element={<ViewMore/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
