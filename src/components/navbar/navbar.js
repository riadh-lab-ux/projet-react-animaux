import './navbar.modules.css'


const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>{props.dogsButton}</li>
        <li>{props.catsButton}</li>
      </ul>
    </nav>
  )
}

export default Navbar
