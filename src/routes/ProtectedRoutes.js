import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const authenticated = JSON.parse(
    localStorage.getItem("authenticated") || false,
  );
  return authenticated ? children : <Navigate to="/" />;
};
