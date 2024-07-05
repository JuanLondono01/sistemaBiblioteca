import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Books } from './pages/Books';
import { Login } from './pages/Login';


export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/' element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    )
};
