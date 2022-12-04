import brand from '../assets/images/logo.png'
import { List } from 'react-bootstrap-icons';
const Header = () => {
  return (
    <header className="col-12">
        <nav className="navbar">
          <div className="container-fluid px-5">
             <img src={brand}  className="navbar-brand mb-0 h1" alt="Leonardo_Brand" />
            <List color='white' size={30} />
          </div>
       </nav>
    </header>
  )
}

export default Header
