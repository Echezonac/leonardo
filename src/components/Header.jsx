import brand from '../assets/images/logo.png'
const Header = () => {
  return (
    <header className="row bg-dark px-4">
        <nav className="navbar">
          <div className="container-fluid">
             <img src={brand}  className="navbar-brand mb-0 h1" alt="Leonardo_Brand" />
          </div>
       </nav>
    </header>
  )
}

export default Header
