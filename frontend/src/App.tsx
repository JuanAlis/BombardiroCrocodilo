import { Routes, Route } from "react-router-dom";
import Perfil from "./pages/Perfil";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import Welcome from "./pages/Welcome";
import AdminRoute from "./components/AdminRoute";
import CreateActivity from "./pages/CreateActivity";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">
				<div className="mx-auto">
					<Routes>
						<Route path="/perfil" element={<Perfil />} />
						<Route path="/about" element={<About />} />
						<Route path="/activities" element={<Activities />} />
						<Route path="/bienvenida" element={<Welcome />} />
						<Route path="/activities/create" element={<CreateActivity />} />

						{/* Ruta protegida para admin */}
						<Route
							path="/admin/users"
							element={
								<AdminRoute>
									<UserList />
								</AdminRoute>
							}
						/>
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
