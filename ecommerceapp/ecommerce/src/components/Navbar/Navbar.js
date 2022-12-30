import React from 'react'
import './navbar.css'


const Navbar = () => {
  const renndercomponent = () => {
    return (
      <div className='header'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <div className='col'>
              <div className='header-warpper'>
                <div className='logo'>
                  <a href='/'>ECOMMERCE</a>
                </div>


                <div className='user-action d-flex justify-content-end'>
                  <a href='/cart'>Cart</a>

                  <div className='user-intro'>Guest</div>
                  <div className='login-btn'>
                    <a href='/login'>Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

    )
  }
  return (
    renndercomponent()
  )
}

export default Navbar