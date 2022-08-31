import { useContext } from 'react'
import Header from '../../components/Header/Header'
import { AuthContext } from '../../context/AuthContext'
import './login.css'

const Secret = () => {
  const { user } = useContext(AuthContext)
  return (
    <><Header />
      <div className='secret'>
        <h1>Sesion iniciada:</h1>
        {user.role === 'ADMIN'
          ? <h2> ADMIN 🚩🔧⚙</h2>
          : <h2>Cliente 🙋🏻‍♀️🛍🙋🏻‍♂️</h2>}

        {user.role === 'CUSTOMER' && <div><h4>Bienvenido</h4><h5>Envios a todo el pais ✈.</h5></div>}

        {user.role === 'ADMIN' && <h4>Bienvenido</h4>}
      </div>
    </>
  )
}

export default Secret
