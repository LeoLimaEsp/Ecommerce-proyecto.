import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useProductContext } from '../../context/ProductContext'
import './header.css'
import 'boxicons'

const Header = () => {
  const { isAuth } = useContext(AuthContext)

  const context = useProductContext()
  const handleSearch = (e) => {
    context.setBuscador(e.target.value)
    console.log(context.buscador)
  }
  return (
    <>

      <div className='header-container'>
        <div className='navbar is-primary'>
          <div className='navbar-brand'>
            {isAuth
              ? (
                <div className='input-box'>
                  <div className='main-input'>
                    <div className='main-input-container'>
                        <Link to='/Home'>
                        <img className='logo-header' img src={logo} alt='logo' />
                      </Link>
                      <input className='input-header' type='search' placeholder='¿Que necesitas?' onChange={handleSearch} />
                    </div>
                  </div>
                </div>)
              :
                (
                  <div className='input-box'>
                    <div className='main-input'>
                      <div className='main-input-container' />
                    </div>
                  </div>
                )}
            <header>
              <nav>
                <ul className='list-links'>
                  {isAuth
                    ? (
                      <>
                        <Link to='/home'>
                          <li className='nav-items'>Inicio</li>
                        </Link>
                        <Link to='/secret'>
                          <li className='nav-items'>Cuenta</li>
                        </Link>
                        <Link to='/categoria'>
                          <li className='nav-items'>Categorias</li>
                        </Link>
                        <Link to='/logout'>
                          <li className='nav-items'>Cerrar sesion</li>
                        </Link>
                      </>
                      )
                    : (
                      <>
                        <Link to='/login'>
                          <li className='nav-items'>Ingresa</li>
                        </Link>
                        <Link to='/signup'>
                          <li className='nav-items'>Registrate </li>
                        </Link>
                      </>
                      )}
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
