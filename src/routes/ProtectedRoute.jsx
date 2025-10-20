import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";

const ProtectedRoute = () => {
    const isSignedIn = true;
    // const isSignedIn = false;
    return isSignedIn ? <Outlet /> : <SignIn/>
}

export default ProtectedRoute
