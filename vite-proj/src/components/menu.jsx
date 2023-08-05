import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <h1>MENU</h1>
        <p>deu tudo certo </p>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
    </div>
  )
}

export default Menu