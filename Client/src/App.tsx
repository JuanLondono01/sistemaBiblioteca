import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Books } from './Books/Books';
import { Login } from './Login/Login';
import { Users } from './Users/Users';
import { Loans } from './Loans/Loans';


export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/Books' element={<Books/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Loans' element={<Loans/>}/>

        </Routes>
      </BrowserRouter>
    )
};
