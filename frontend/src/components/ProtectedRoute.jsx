import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Agar login nahi hai
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Agar login hai
  return children;
}
