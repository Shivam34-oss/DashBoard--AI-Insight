import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Clueso Clone
      </Link>

      <div>
        {token ? (
          <>
            <Link className="me-3 btn btn-outline-primary btn-sm" to="/dashboard">Dashboard</Link>
            <Link className="me-3 btn btn-outline-primary btn-sm" to="/create-guide">Create Guide</Link>
            <button onClick={logout} className="btn btn-outline-dark btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="me-3" to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
