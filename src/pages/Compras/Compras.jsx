import { useLocation, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Compras = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <div className='Carrito'>
        <table class='table table-success table-striped'>
          <thead>
            <tr className='text-primario'>
              <th scope='col'>#</th>
              <th scope='col'>Producto</th>
              <th scope='col'>Precio</th>
              <th scope='col'>cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td className='table__productos'>
                <p>producto</p>
              </td>
              <td className='table__precio'><p>$ 5</p></td>
              <td className='table__cantidad'>
                <input type='number' min='1' />
                <button className='delate btn btn-danget'>x</button>
                <br />
                <div className='row mx-4'>
                  <h3 className='itemcartTotal'>Total: </h3>
                </div>
                <button className='btn btn-success'>Comprar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Me aburrí de compras me iré a home :{location.pathname} </p>
      <p><Link to='/'>Regresa al Home</Link></p>
    </>
  )
}

export default Compras
