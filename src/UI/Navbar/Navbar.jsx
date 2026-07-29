import {Link} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../context/index.js";
import MyButton from "../button/MyButton.jsx";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem("auth");
        setIsAuth(false);
    }

    return (
        <div className="navbar">
            {isAuth && (
                <div>
                    <MyButton onClick={logout}>
                        Выйти
                    </MyButton>
                </div>
            )}

            <div className="navbar__items">
                <Link to="/about">О нас</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;