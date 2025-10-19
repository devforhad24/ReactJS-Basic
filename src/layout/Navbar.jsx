import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/products'}>Products</Link> </li>
            <li> <Link to={'/contact'}>Contact</Link> </li>
            <li> <Link to={'/about'}>About</Link> </li>
        </ul>
        <Outlet/>
      </nav>
    </div>
  )
}

export default Navbar
