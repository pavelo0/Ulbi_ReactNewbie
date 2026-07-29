import MyInput from "../UI/input/MyInput.jsx";
import MyButton from "../UI/button/MyButton.jsx";
import {AuthContext} from "../context/index.js";
import {useContext} from "react";
import {useNavigate} from "react-router";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", 'true');
        navigate("/posts" );
    }

    return (
        <div>
            <h1>
               Страница для логина
            </h1>

            <form onSubmit={login}>
                <MyInput type="text" placeholder={"Веедите логин"}/>
                <MyInput type="password" placeholder={"Веедите пароль"}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;