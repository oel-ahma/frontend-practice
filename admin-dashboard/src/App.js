import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Login from './pages/login/Login';
import "./style/dark.scss";
import {
	createBrowserRouter,
	RouterProvider,
	Routes,
	Route,
	BrowserRouter,
  } from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Form from './Form';

function App() {

	const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="container mx-auto">
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home/>} />
					<Route path='login' element={<Login/>}/>
					<Route path="users">
						<Route index element={<List/>}/>
						<Route path=':userId' element={<Single/>}/>
						<Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
					</Route>
					<Route path="products">
						<Route index element={<List/>}/>
						<Route path=':productId' element={<Single/>}/>
						<Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
					</Route>
					<Route path="post" element={<Form/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
      </header>
    </div>
  );
}

export default App;