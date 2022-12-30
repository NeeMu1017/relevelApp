import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Loadngpage from '../../../pages/Loadingpage/Landingpage';
import Auth from '../../../pages/Auth0/Auth';

export const AppRouter = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route>
          <Route path='/' element ={ <Loadngpage/>}/>
          <Route path='/login' element ={ <Auth/>}/>
        </Route>
    </Routes>
   </BrowserRouter>
  )
}
