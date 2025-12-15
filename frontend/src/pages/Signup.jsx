import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3>Create Account</h3>

      <form onSubmit={submit}>
        <input className="form-control mb-3" placeholder="Name"
          onChange={(e) => setName(e.target.value)} />

        <input className="form-control mb-3" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-primary w-100">Signup</button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
