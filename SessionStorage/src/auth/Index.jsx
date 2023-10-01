import { useSessionContext } from "../context/SessionContext";
import "./Index.css";
import LoginForm from "./Login";
import SiginForm from "./SignUp";

const LoginPage = () => {
    const { showSignUpForm } = useSessionContext();

    return (
        <div className="login">
            {showSignUpForm ? <SiginForm /> : <LoginForm />}
        </div>
    );
};
export default LoginPage;
