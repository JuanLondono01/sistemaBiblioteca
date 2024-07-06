import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Books } from './Books/Books';
import { Login } from './Login/Login';


export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    )
};
