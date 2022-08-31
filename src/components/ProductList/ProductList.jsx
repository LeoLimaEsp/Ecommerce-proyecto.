import { Link } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext'
import FadeLoader from 'react-spinners/FadeLoader'
import './productlist.css'
import Paginacion from '../Paginacion/Paginacion'

const ProductList = () => {
  const context = useProductContext()
  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }

  return (
    <>
      <div className='main-container'>
        {context.loading
          ? <FadeLoader color='#000000' loading={context.loading} size={100} />
          : context.currentPost.filter(producto => {
            if (context.buscador === '') {
              return producto
            } else if (producto.product_name.toLowerCase().includes(context.buscador)) {
              return producto
            }
            return null
          }).map((producto) => (
            <div className='app-header' key={producto._id}>
              <div className='child'>
                <div className='card'>
                  <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://licoresyvinoscr.com/img/cms/agotado.png'} alt='' />
                  <p> {`${producto.product_name} `}</p>
                  <p>{`Brand: ${producto.brand} `}</p>
                  <p>{`Price: $ ${producto.price} `}</p>
                  <Link
                    className='btn btn-dark'
                    to={{
                      pathname: `/${producto._id}`
                    }}
                  >View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Paginacion
        productosPerPage={context.productosPerPage}
        totalProductos={context.producto.length}
        paginate={context.paginate}
        className='paginacion'
      />
    </>
  )
}

export default ProductList
