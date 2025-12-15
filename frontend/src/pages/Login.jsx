import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // using validation
  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //  submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch  {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="mb-4 text-center">Login to Clueso Clone</h3>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="email"
          className="form-control mb-1"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}

        {/* Password */}
        <input
          type="password"
          className="form-control mt-3 mb-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        {/* Button */}
        <button
          className="btn btn-dark w-100 mt-4"
          type="submit"
          disabled={!email || !password || loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-3 text-center">
        No account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
