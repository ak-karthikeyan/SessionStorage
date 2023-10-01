import { Result } from "antd";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginPage from "../auth/Index";
import { useSessionContext } from "../context/SessionContext";
import HomePage from "../pages/Index";

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useSessionContext();
//   let location = useLocation();
//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return children;
// };

function ProtectedRoute() {
    const { isLoggedIn } = useSessionContext();
    console.log("are in", isLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
function PageNotFount() {
    return <Result status="500" title="500" subTitle="Sorry, went wrong." />;
}
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<HomePage />} />
            </Route>
            {/* <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      /> */}
            <Route path="*" element={<PageNotFount />} />
        </Routes>
    );
}
