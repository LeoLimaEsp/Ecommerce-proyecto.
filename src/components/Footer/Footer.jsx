import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='navbar is-primary-footer'>

      <div className='final'>
        <Link id='final' to='/'>TODO A UN CLICK.COM</Link>
      </div>
    </div>
  )
}

export default Footer
