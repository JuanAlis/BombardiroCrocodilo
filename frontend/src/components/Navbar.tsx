import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogoClick = () => {
    if (!user) {
      navigate('/perfil'); // opcional: redirigir si no hay sesión
      return;
    }

    switch (user.tipo) {
      case 'admin':
        navigate('/admin/users');
        break;
      case 'profesor':
      case 'alumno':
        navigate('/bienvenida');
        break;
      default:
        navigate('/perfil');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span
          className="navbar-brand"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          E-Learning
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activities">Activities</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
