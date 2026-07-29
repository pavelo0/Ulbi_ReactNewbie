import './styles/App.css';
import {BrowserRouter} from "react-router";
import Navbar from "./UI/Navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/index.js";
import {useEffect, useState} from "react";

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if(localStorage.getItem("auth")) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading,
			setIsLoading,
		}}>
			<BrowserRouter>
				<Navbar />

				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
