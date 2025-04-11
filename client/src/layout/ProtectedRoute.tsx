import { selectToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  
  const token = useAppSelector(selectToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
}


export default ProtectedRoute;